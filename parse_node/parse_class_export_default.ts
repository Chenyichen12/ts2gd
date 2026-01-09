import ts from "typescript"
import { combine, ParseNodeType, ParseState } from "../parse_node"
import { parseClassDeclaration } from "./parse_class_declaration"

export function getExtentContent(
  node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): string {
  const hasExtends = node.heritageClauses && node.heritageClauses.length > 0
  if (!hasExtends) {
    return ""
  }
  let targetExtend = node.heritageClauses![0].types[0].getText()
  let ignoreTarget = props.ignoreTypeUses.find(
    (ite) => ite.typeName === targetExtend
  )
  if (ignoreTarget == undefined) {
    return "extends " + targetExtend
  } else {
    return `extends "${ignoreTarget.resourcePath}".${ignoreTarget.typeName}`
  }
}

export function parseClassExportDefault(
  node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): ParseNodeType {
  let isAnnoumousClass = false
  // get decorator name to check if is annoumous class
  const decorators = ts.getDecorators(node)
  if (decorators != undefined) {
    for (const dec of decorators) {
      if (dec.expression.getText() === "anonymous") {
        isAnnoumousClass = true
        break
      }
    }
  }
  let classNameString = ""
  if (!isAnnoumousClass) {
    classNameString = `class_name ${node.name?.getText()}\n`
  }
  const content = parseClassDeclaration(node, props)
  if(content.content.trim() === ""){
    content.content = ""
  }
  var extendsString = getExtentContent(node, props)
  content.content = `
${classNameString}
${extendsString}
${content.content}
`
  return content
}
