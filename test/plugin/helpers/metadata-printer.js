"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PluginMetadataPrinter = void 0;
const prettier = require("prettier");
const ts = require("typescript");
class PluginMetadataPrinter {
    print(metadata, typeImports) {
        const objectLiteralExpr = ts.factory.createObjectLiteralExpression(Object.keys(metadata).map((key) => this.recursivelyCreatePropertyAssignment(key, metadata[key])));
        const exportAssignment = ts.factory.createExportAssignment(undefined, undefined, ts.factory.createArrowFunction([ts.factory.createToken(ts.SyntaxKind.AsyncKeyword)], undefined, [], undefined, ts.factory.createToken(ts.SyntaxKind.EqualsGreaterThanToken), ts.factory.createBlock([
            ts.factory.createVariableStatement(undefined, ts.factory.createVariableDeclarationList([
                ts.factory.createVariableDeclaration(ts.factory.createIdentifier('t'), undefined, undefined, ts.factory.createObjectLiteralExpression(Object.keys(typeImports).map((ti) => this.createPropertyAssignment(ti, typeImports[ti])), true))
            ], ts.NodeFlags.Const |
                ts.NodeFlags.AwaitContext |
                ts.NodeFlags.ContextFlags |
                ts.NodeFlags.TypeExcludesFlags)),
            ts.factory.createReturnStatement(objectLiteralExpr)
        ], true)));
        const printer = ts.createPrinter({
            newLine: ts.NewLineKind.LineFeed
        });
        const resultFile = ts.createSourceFile('file.ts', '', ts.ScriptTarget.Latest, false, ts.ScriptKind.TS);
        const output = printer.printNode(ts.EmitHint.Unspecified, exportAssignment, resultFile);
        return (`// @ts-nocheck\n` +
            prettier.format(output, {
                parser: 'typescript',
                singleQuote: true,
                trailingComma: 'none'
            }));
    }
    createPropertyAssignment(identifier, target) {
        return ts.factory.createPropertyAssignment(ts.factory.createComputedPropertyName(ts.factory.createStringLiteral(identifier)), ts.factory.createIdentifier(target));
    }
    recursivelyCreatePropertyAssignment(identifier, meta) {
        if (Array.isArray(meta)) {
            return ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(identifier), ts.factory.createArrayLiteralExpression(meta.map(([importExpr, meta]) => ts.factory.createArrayLiteralExpression([
                importExpr,
                ts.factory.createObjectLiteralExpression(Object.keys(meta).map((key) => this.recursivelyCreatePropertyAssignment(key, meta[key])))
            ]))));
        }
        return ts.factory.createPropertyAssignment(ts.factory.createStringLiteral(identifier), ts.isObjectLiteralExpression(meta)
            ? meta
            : ts.factory.createObjectLiteralExpression(Object.keys(meta).map((key) => this.recursivelyCreatePropertyAssignment(key, meta[key]))));
    }
}
exports.PluginMetadataPrinter = PluginMetadataPrinter;
