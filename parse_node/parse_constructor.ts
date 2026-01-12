import ts from "typescript"

import { ParseState, combine, ParseNodeType } from "../parse_node"

export const parseConstructor = (
  node: ts.ConstructorDeclaration,
  props: ParseState
): ParseNodeType => {
  if (node.body) {
    // The trim() is for a constructor with only one element: a super() call
    let paramString = ""
    for (let i = 0; i < node.parameters.length; i++) {
      const param = node.parameters[i]
      const paramName = param.name.getText()
      if (param.questionToken) {
        paramString += paramName + " = null"
      } else {
        paramString += paramName
      }
      if (i < node.parameters.length - 1) {
        paramString += ", "
      }
    }

    return combine({
      parent: node,
      nodes: node.body,
      props,
      addIndent: true,
      parsedStrings: (body) => `
func _init(${paramString}): 
\t${body.trim().length > 0 ? body : "pass"}
`,
    })
  } else {
    return combine({
      parent: node,
      nodes: [],
      props,
      parsedStrings: () => `func _init():\n\tpass`,
    })
  }
}
