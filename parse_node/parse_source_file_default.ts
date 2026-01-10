import ts from "typescript"
import { combine, parseNode, ParseNodeType, ParseState } from "../parse_node"
import {
  parseClassExportDefault,
  parseClassExportHeader,
} from "./parse_class_export_default"
import { parseClassExportNormal } from "./parse_class_normal"
import exp from "constants"
import { parseClassDeclaration } from "./parse_class_declaration"

function isExportDefault(node: ts.ClassDeclaration) {
  const mods = node.modifiers
  return (
    mods?.some((mod) => mod.kind === ts.SyntaxKind.ExportKeyword) &&
    mods?.some((mod) => mod.kind === ts.SyntaxKind.DefaultKeyword)
  )
}
function isClassAnonymous(node: ts.ClassDeclaration) {
  const declarations = ts.getDecorators(node)
  if (declarations != undefined) {
    for (const dec of declarations) {
      if (dec.expression.getText() === "anonymous") {
        return true
      }
    }
  }
  return false
}

export function parseSourceFileDefault(
  node: ts.SourceFile,
  props: ParseState
): ParseNodeType {
  const { statements } = node
  const allClasses = statements.filter((statement) => {
    // const mods = ts.getModifiers()
    if (statement.kind == ts.SyntaxKind.ClassDeclaration) {
      const mods = ts.canHaveModifiers(statement)
        ? ts.getModifiers(statement)
        : undefined
      const isDeclare = mods?.some(
        (mod) => mod.kind === ts.SyntaxKind.DeclareKeyword
      )
      return !isDeclare
    }
    return false
  }) as ts.ClassDeclaration[]

  const predefine = statements
    .filter((statement) => {
      if (
        statement.kind == ts.SyntaxKind.InterfaceDeclaration ||
        statement.kind == ts.SyntaxKind.EnumDeclaration
      ) {
        return true
      }
      if (statement.kind == ts.SyntaxKind.ClassDeclaration) {
        if (isExportDefault(statement as ts.ClassDeclaration) && isClassAnonymous(statement as ts.ClassDeclaration)) {
          return false
        } else {
          return true
        }
      }
    })
    .map((statement) => {
      return (statement as ts.DeclarationStatement).name!.getText()
    })
  const nameSpace = props.sourceFileAsset.getFileNamespace()
  props.fileNamespace = nameSpace
  for (const name of predefine) {
    props.preserveTypeMap.set(name, name)
  }

  const allTopStatements = statements.filter((statement) => {
    if (statement.kind != ts.SyntaxKind.ClassDeclaration) {
      return true
    }
    return false
  }) as ts.Statement[]
  const sourceInfo = props.project
    .sourceFiles()
    .find((file) => file.fsPath === node.fileName)
  const exportPath = sourceInfo?.gdPath

  var sourceContents = ""
  const exportdefaultClassNode = allClasses.find((classNode) =>
    isExportDefault(classNode)
  )
  for (const topNode of allTopStatements) {
    const content = parseNode(topNode, props)
    sourceContents += content.content
  }



  if (exportdefaultClassNode) {
    // const content = parseClassExportDefault(exportdefaultClassNode, props)
    const header = parseClassExportHeader(exportdefaultClassNode, props)
    sourceContents = header.content + sourceContents
  }
  if (exportdefaultClassNode) {
    sourceContents += parseClassDeclaration(
      exportdefaultClassNode,
      props
    ).content
  }
  for (const classNode of allClasses) {
    if (classNode === exportdefaultClassNode) {
      continue
    }
    const content = parseClassExportNormal(classNode, props)
    sourceContents += content.content
  }

  return {
    files: [
      {
        filePath: exportPath ? exportPath : "",
        body: sourceContents,
      },
    ],
    content: "",
  }
}
