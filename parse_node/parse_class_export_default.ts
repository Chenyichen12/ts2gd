import ts from "typescript";
import { combine, ParseNodeType, ParseState } from "../parse_node";
import { parseClassDeclaration } from "./parse_class_declaration";

export function parseClassExportDefault(node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): ParseNodeType{
    const content = parseClassDeclaration(node, props);
    const hasExtends = node.heritageClauses && node.heritageClauses.length > 0;
    var extendsString = "";
    if(hasExtends){
        extendsString ="extends " + node.heritageClauses![0].types[0].getText();
    }

    content.content = `
class_name ${node.name?.getText()}
${extendsString}
${content.content}
    `
    return content;
}