import ts from "typescript";
import { combine, ParseNodeType, ParseState } from "../parse_node";
import { parseClassDeclaration } from "./parse_class_declaration";

export function getExtentContent(node: ts.ClassDeclaration | ts.ClassExpression, props: ParseState): string {
    const hasExtends = node.heritageClauses && node.heritageClauses.length > 0;
    if(!hasExtends){
        return ""
    }
    let targetExtend = node.heritageClauses![0].types[0].getText();
    let ignoreTarget = props.ignoreTypeUses.find(ite => ite.typeName === targetExtend);
    if(ignoreTarget == undefined){
        return "extends " + targetExtend;
    }
    else{
        return `extends "${ignoreTarget.resourcePath}".${ignoreTarget.typeName}`
    }
}

export function parseClassExportDefault(node: ts.ClassDeclaration | ts.ClassExpression,
  props: ParseState
): ParseNodeType{
    const content = parseClassDeclaration(node, props);
    var extendsString = getExtentContent(node, props);

    content.content = `
class_name ${node.name?.getText()}
${extendsString}
${content.content}
    `
    return content;
}