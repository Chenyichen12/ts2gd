import ts from "typescript";
import { combine, parseNode, ParseNodeType, ParseState } from "../parse_node";
import { parseClassExportDefault } from "./parse_class_export_default";
import { parseClassExportNormal } from "./parse_class_normal";

function isExportDefault(node: ts.ClassDeclaration){
    const mods = node.modifiers;
    return mods?.some(mod => mod.kind === ts.SyntaxKind.ExportKeyword) && mods?.some(mod => mod.kind === ts.SyntaxKind.DefaultKeyword);
}

export function parseSourceFileDefault(
  node: ts.SourceFile,
  props: ParseState
) : ParseNodeType {
    const { statements } = node;
    const allClasses = statements.filter(
      (statement) =>{
        // const mods = ts.getModifiers()
        if(statement.kind == ts.SyntaxKind.ClassDeclaration){
            const mods = ts.canHaveModifiers(statement) ? ts.getModifiers(statement) : undefined;
            const isDeclare = mods?.some(mod => mod.kind === ts.SyntaxKind.DeclareKeyword);
            return !isDeclare;
        }
        return false;
      }
    ) as ts.ClassDeclaration[];
    const allTopStatements = statements.filter(
      (statement) =>{
        if(statement.kind != ts.SyntaxKind.ClassDeclaration){
            return true;
        }
        return false;
      }) as ts.Statement[];
    const sourceInfo = props.project
        .sourceFiles()
        .find((file) => file.fsPath === node.fileName)
    const exportPath = sourceInfo?.gdPath;

    var sourceContents = ""
    for(const topNode of allTopStatements){
      const content = parseNode(topNode, props);
      sourceContents += content.content;
    }




    for (const classNode of allClasses) {
        if(isExportDefault(classNode)){
            const content = parseClassExportDefault(classNode, props);
            sourceContents += content.content;
        }
        else{
            const content = parseClassExportNormal(classNode, props);
            sourceContents += content.content;
        }
    }

  return {
    files: [{
        filePath: exportPath ? exportPath : "",
        body: sourceContents
    }],
    content: "",
  }
}