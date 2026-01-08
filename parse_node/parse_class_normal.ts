import ts from "typescript";
import { combine, parseNode, ParseNodeType, ParseState } from "../parse_node";
import { parseClassDeclaration } from "./parse_class_declaration";

export function parseClassExportNormal(node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): ParseNodeType{
    const content = parseClassDeclaration(node, props);
    const hasExtends = node.heritageClauses && node.heritageClauses.length > 0;
    var extendsString = "";
    if(hasExtends){
        extendsString ="extends " + node.heritageClauses![0].types[0].getText();
    }
    const result = parseNode(node, props);

    const isResultNullString = result.content.trim() === "";
    if(isResultNullString){
        result.content = "  pass"
    }
    else{
        result.content = result.content
          .split("\n")
          .map((line, i) => (i > 0 ? "  " : "") + line)
          .join("\n")
    }

    result.content = `
class ${node.name?.getText()} ${extendsString}:\n  `+result.content;
    
    return result;
}