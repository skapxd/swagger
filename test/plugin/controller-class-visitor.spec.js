"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const compiler_plugin_1 = require("../../lib/plugin/compiler-plugin");
const app_controller_1 = require("./fixtures/app.controller");
const app_controller_tabs_1 = require("./fixtures/app.controller-tabs");
const app_controller_without_modifiers_1 = require("./fixtures/app.controller-without-modifiers");
describe('Controller methods', () => {
    it('should add response based on the return value (spaces)', () => {
        const options = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2021,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true
        };
        const filename = 'app.controller.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(app_controller_1.appControllerText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [(0, compiler_plugin_1.before)({ introspectComments: true }, fakeProgram)]
            }
        });
        expect(result.outputText).toEqual(app_controller_1.appControllerTextTranspiled);
    });
    it('should add response based on the return value (tabs)', () => {
        const options = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2021,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true
        };
        const filename = 'app.controller.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(app_controller_tabs_1.appControllerWithTabsText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [(0, compiler_plugin_1.before)({ introspectComments: true }, fakeProgram)]
            }
        });
        expect(result.outputText).toEqual(app_controller_tabs_1.appControllerWithTabsTextTranspiled);
    });
    it('should add response based on the return value (without modifiers)', () => {
        const options = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES2021,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true
        };
        const filename = 'app.controller.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(app_controller_without_modifiers_1.appControllerWithoutModifiersText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [(0, compiler_plugin_1.before)({ introspectComments: true }, fakeProgram)]
            }
        });
        expect(result.outputText).toEqual(app_controller_without_modifiers_1.appControllerWithoutModifiersTextTranspiled);
    });
});
