import ts from "typescript";
import { combine, parseNode, ParseNodeType, ParseState } from "../parse_node";
import { parseClassDeclaration } from "./parse_class_declaration";
import { getExtentContent } from "./parse_class_export_default";

export function parseClassExportNormal(node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): ParseNodeType{
    const content = parseClassDeclaration(node, props);

    let extendsString = getExtentContent(node, props);
    const result = parseNode(node, props);

    const isResultNullString = result.content.trim() === "";
    if(isResultNullString){
        result.content = "  pass"
    }
    else{
        result.content = result.content
          .split("\n")
          .map((line, i) => (i > 0 ? "\t" : "") + line)
          .join("\n")
    }

    result.content = `
class ${node.name?.getText()} ${extendsString}:\n\t`+result.content;
    
    return result;
}