import path from "path"

import { UsageDomain } from "tsutils"
import ts, { SyntaxKind } from "typescript"

import TsGdProject from "../project/project"
import { ErrorName, addError } from "../errors"
import { ParseNodeType, ParseState, combine } from "../parse_node"
import { isEnumType } from "../ts_utils"
import { AssetSourceFile } from "../project/assets/asset_source_file"
const getPathWithoutExtension = (
  node: ts.ImportDeclaration,
  props: ParseState
) => {
  const importPathLiteral = node.moduleSpecifier as ts.StringLiteral
  const importPath = importPathLiteral.text
  let pathToImportedTs = ""

  if (importPath.startsWith(".")) {
    // Handle relative paths

    pathToImportedTs = path.join(
      path.dirname(node.getSourceFile().fileName),
      importPath
    )
  } else {
    // Handle absolute paths

    pathToImportedTs = path.join(props.project.paths.rootPath, importPath)
  }

  return pathToImportedTs
}

export const getImportResPathForEnum = (
  node: ts.Type,
  props: ParseState
): {
  sourceFile: ts.SourceFile
  resPath: string
  enumName: string
} => {
  const enumSymbol = node.getSymbol()

  if (!enumSymbol) {
    throw new Error("Can't find symbol for node.")
  }

  const enumDeclarations = enumSymbol.declarations

  if (!enumDeclarations) {
    throw new Error(`No Enum declartion given`)
  }

  if (enumDeclarations.length === 0 || enumDeclarations.length > 1) {
    throw new Error(
      `Invalid length for declarations: ${enumDeclarations.length}`
    )
  }

  const enumDeclaration = enumDeclarations[0]
  const enumSourceFile = enumDeclaration.getSourceFile()

  const enumSourceFileAsset = props.project
    .sourceFiles()
    .find((sf) => sf.fsPath === enumSourceFile.fileName)

  if (!enumSourceFileAsset) {
    throw new Error(
      `Can't find associated sourcefile for ${enumSourceFile.fileName}`
    )
  }

  let enumTypeString = props.program.getTypeChecker().typeToString(node)

  if (enumTypeString.startsWith("typeof ")) {
    enumTypeString = enumTypeString.slice("typeof ".length)
  }

  const pathWithoutEnum = enumSourceFileAsset.resPath
  const importPath =
    pathWithoutEnum.slice(0, -".gd".length) + "_" + enumTypeString + ".gd"

  return {
    resPath: importPath,
    sourceFile: enumSourceFile,
    enumName: enumTypeString,
  }
}
export const parseImportDeclaration = (
  node: ts.ImportDeclaration,
  props: ParseState
): ParseNodeType => {
  const pathWithoutExtension = getPathWithoutExtension(node, props)
  let pathToImportedTs = pathWithoutExtension + ".ts"
  pathToImportedTs = pathToImportedTs.replace(/\\/g, "/") // Normalize Windows paths
  const importedSourceFile = props.project
    .sourceFiles()
    .find((sf) => sf.fsPath === pathToImportedTs)!

  const preloadContainer: {
    typeName: string
    preloadPath: string
    preloadSubffix?: string
  }[] = []
  // parse the default import
  const defaultImport = node.importClause?.name
  // check the import type is global class
  if (defaultImport) {
    let shouldToIgnoreDefault = false
    const type = props.program.getTypeChecker().getTypeAtLocation(defaultImport)
    // get class declaration
    if (type.symbol?.declarations) {
      const classDeclaration = type.symbol.declarations.find((decl) =>
        ts.isClassDeclaration(decl)
      ) as ts.ClassDeclaration | undefined
      // is global class
      const decorators = ts.getDecorators(classDeclaration!)
      if (decorators) {
        let isGlobal = true
        for (const dec of decorators) {
          if (dec.expression.getText() === "anonymous") {
            isGlobal = false
            break
          }
        }
        if (!isGlobal) {
          shouldToIgnoreDefault = true
        }
      }
    }

    if (shouldToIgnoreDefault) {
      props.ignoreTypeUses.push({
        typeName: defaultImport.text,
        resourcePath: importedSourceFile.resPath,
        redirectType: undefined,
      })
      preloadContainer.push({
        typeName: defaultImport.text,
        preloadPath: importedSourceFile.resPath,
      })
    }
  }
  // get named bindings

  // check the default import at that script
  const targetExport = importedSourceFile.getExportDefaultClassName()

  const namedBindings = node.importClause?.namedBindings
  if (namedBindings && ts.isNamedImports(namedBindings)) {
    const bindings = namedBindings as ts.NamedImports
    for (const element of bindings.elements) {
      const typeName = element.name.text
      // if type has default import, ignore it
      if (targetExport && !targetExport.isAnonymous) {
        props.ignoreTypeUses.push({
          typeName: typeName,
          resourcePath: importedSourceFile.resPath,
          redirectType: targetExport.className + "." + typeName,
        })
      } else {
        props.ignoreTypeUses.push({
          typeName: typeName,
          resourcePath: importedSourceFile.resPath,
          redirectType: undefined,
        })
        preloadContainer.push({
          typeName: typeName,
          preloadPath: importedSourceFile.resPath,
          preloadSubffix: "." + typeName,
        })
      }
    }
  }

  // resolve preload statements
  return combine({
    parent: node,
    nodes: [],
    props,
    parsedStrings: () =>
      preloadContainer
        .map((v) => {
          return `const ${v.typeName} = preload("${v.preloadPath}")${v.preloadSubffix ?? ""}`
        })
        .join("\n"),
  })
}


export const parseImportDeclaration2 = (
  node: ts.ImportDeclaration,
  props: ParseState
): ParseNodeType => {
  // Step 1: resolve full path

  const pathWithoutExtension = getPathWithoutExtension(node, props)
  let pathToImportedTs = pathWithoutExtension + ".ts"
  pathToImportedTs = pathToImportedTs.replace(/\\/g, "/") // Normalize Windows paths

  // Step 2: Parse bindings, sorting between class and enum types (which we need
  // to generate different imports for).

  type ImportType = {
    importedName: string
    type: "enum" | "class" | "scene"
    resPath: string
    sourceFile?: AssetSourceFile
  }

  const namedBindings = node.importClause?.namedBindings

  if (!namedBindings) {
    // default import, no need to generate code
    return {
      content: "",
    }

    throw new Error("Unsupported import type!")
  }

  let imports: ImportType[] = []

  if (namedBindings.kind === SyntaxKind.NamedImports) {
    const bindings = namedBindings as ts.NamedImports

    for (const element of bindings.elements) {
      const type = props.program.getTypeChecker().getTypeAtLocation(element)

      // TODO rewrite this using new project obj

      if (isEnumType(type)) {
        const { resPath, enumName } = getImportResPathForEnum(type, props)

        imports.push({ importedName: enumName, resPath: resPath, type: "enum" })
      } else if (type.symbol?.name === "PackedScene") {
        const importedName = element.name.text
        const className = importedName.slice(0, -"Tscn".length)
        const resPath = props.project
          .godotScenes()
          .find((scene) => scene.name === className)?.resPath

        if (!resPath) {
          continue
        }

        imports.push({
          importedName: importedName,
          resPath: resPath,
          type: "scene",
        })
      } else {
        const importedSourceFile = props.project
          .sourceFiles()
          .find((sf) => sf.fsPath === pathToImportedTs)

        if (!importedSourceFile) {
          if (pathToImportedTs.includes("@")) {
            continue
          }

          addError({
            error: ErrorName.InvalidNumber,
            location: node,
            description: `Import ${pathToImportedTs} not found.`,
            stack: new Error().stack ?? "",
          })

          continue
        }

        let typeString = props.program.getTypeChecker().typeToString(type)

        if (typeString.startsWith("typeof ")) {
          typeString = typeString.slice("typeof ".length)
        }

        const usages = props.usages.get(element.name)

        imports.push({
          importedName: typeString,
          resPath: importedSourceFile.resPath,
          type: "class",
          sourceFile: importedSourceFile,
        })

        // let usedAsValue = false

        // No import is necessary unless we actually use the identifier as a value. (Circular references
        // will crash Godot, so we try to avoid them.)
        // for (const use of usages?.uses ?? []) {
        //   if (use.domain & UsageDomain.Value) {
        //     usedAsValue = true
        //     break
        //   }
        // }

        // if (!importedSourceFile.isAutoload() && usedAsValue) {
        //   imports.push({
        //     importedName: typeString,
        //     resPath: importedSourceFile.resPath,
        //     type: "class",
        //   })
        // }
      }
    }
  }

  const noNeedPreloadClass: string[] = []
  for (const imp of imports) {
    if (imp.type === "class") {
      let exportClassString = imp.sourceFile!.getExportDefaultClassName()
      if (exportClassString !== undefined) {
        exportClassString.className = exportClassString + "." + imp.importedName
        noNeedPreloadClass.push(imp.importedName)
      }

      props.ignoreTypeUses.push({
        typeName: imp.importedName,
        resourcePath: imp.resPath,
        redirectType: exportClassString?.className,
      })

      // props.ignoreTypeUses.push({
      //   typeName: imp.importedName,
      //   resourcePath: imp.resPath
      // })
    }
  }

  return combine({
    parent: node,
    nodes: [],
    props,
    parsedStrings: () =>
      imports
        .map(({ importedName, type, resPath }) => {
          if (type === "enum") {
            return `const ${importedName} = preload("${resPath}").${importedName}`
          } else if (type === "scene") {
            return `const ${importedName} = preload("${resPath}")`
          } else if (type === "class") {
            // return `const ${importedName} = preload("${resPath}")`
            if (!noNeedPreloadClass.includes(importedName)) {
              return `const ${importedName} = preload("${resPath}").${importedName}`
            }
          }
        })
        .join("\n"),
  })
}
