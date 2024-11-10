import * as ts from 'typescript';
export declare class PluginMetadataPrinter {
    print(metadata: Record<string, Record<string, Array<[ts.CallExpression, any]>>>, typeImports: Record<string, string>): string;
    private createPropertyAssignment;
    private recursivelyCreatePropertyAssignment;
}
