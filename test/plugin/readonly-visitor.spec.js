"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const fs_1 = require("fs");
const path_1 = require("path");
const ts = require("typescript");
const readonly_visitor_1 = require("../../lib/plugin/visitors/readonly.visitor");
const metadata_printer_1 = require("./helpers/metadata-printer");
function createTsProgram(tsconfigPath) {
    const parsedCmd = ts.getParsedCommandLineOfConfigFile(tsconfigPath, undefined, ts.sys);
    const { options, fileNames: rootNames, projectReferences } = parsedCmd;
    const program = ts.createProgram({ options, rootNames, projectReferences });
    return program;
}
describe('Readonly visitor', () => {
    const visitor = new readonly_visitor_1.ReadonlyVisitor({
        pathToSource: (0, path_1.join)(__dirname, 'fixtures', 'project'),
        introspectComments: true,
        dtoFileNameSuffix: ['.dto.ts', '.model.ts', '.class.ts'],
        classValidatorShim: true,
        debug: true
    });
    const metadataPrinter = new metadata_printer_1.PluginMetadataPrinter();
    it('should generate a serialized metadata', () => {
        const tsconfigPath = (0, path_1.join)(__dirname, 'fixtures', 'project', 'tsconfig.json');
        const program = createTsProgram(tsconfigPath);
        for (const sourceFile of program.getSourceFiles()) {
            if (!sourceFile.isDeclarationFile) {
                visitor.visit(program, sourceFile);
            }
        }
        const result = metadataPrinter.print({
            [visitor.key]: visitor.collect()
        }, visitor.typeImports);
        const expectedOutput = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, 'fixtures', 'serialized-meta.fixture.ts'), 'utf-8')
            .replace(/\r\n/g, '\n')
            .replace(/\r/g, '\n');
        expect(result).toEqual(expectedOutput);
    });
});
