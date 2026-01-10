import ts from "typescript"

import { ParseNodeType, ParseState, combine } from "../parse_node"
import { Test } from "../tests/test"

export const parseIdentifier = (
  node: ts.Identifier,
  props: ParseState
): ParseNodeType => {
  const name = node.text

  if (name === "undefined") {
    return combine({
      parent: node,
      nodes: [],
      props,
      parsedStrings: () => "null",
    })
  }

  return combine({
    parent: node,
    nodes: [],
    props,
    parsedStrings: () => {
      const name = props.scope.getName(node)

      if (!name) {
        let text = node.text;
        if(props.preserveTypeMap.has(text)){
          text = props.preserveTypeMap.get(text)!
        }

        return text
      }


      return name
    },
  })
}

export const testUndefined: Test = {
  ts: `
let x = undefined
  `,
  expected: `
var _x = null
  `,
}
