"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ts = require("typescript");
const compiler_plugin_1 = require("../../lib/plugin/compiler-plugin");
const plugin_debug_logger_1 = require("../../lib/plugin/plugin-debug-logger");
const changed_class_dto_1 = require("./fixtures/changed-class.dto");
const create_cat_alt_dto_1 = require("./fixtures/create-cat-alt.dto");
const create_cat_alt2_dto_1 = require("./fixtures/create-cat-alt2.dto");
const create_cat_exclude_dto_1 = require("./fixtures/create-cat-exclude.dto");
const create_cat_exclusive_dto_1 = require("./fixtures/create-cat-exclusive.dto");
const create_cat_priority_dto_1 = require("./fixtures/create-cat-priority.dto");
const create_cat_dto_1 = require("./fixtures/create-cat.dto");
const es5_class_dto_1 = require("./fixtures/es5-class.dto");
const nullable_dto_1 = require("./fixtures/nullable.dto");
const parameter_property_dto_1 = require("./fixtures/parameter-property.dto");
const string_literal_dto_1 = require("./fixtures/string-literal.dto");
describe('API model properties', () => {
    it('should add the metadata factory when no decorators exist, and generated propertyKey is title', () => {
        const options = {
            module: ts.ModuleKind.ES2022,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_dto_1.createCatDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        classValidatorShim: true,
                        dtoKeyOfComment: 'title',
                        introspectComments: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_dto_1.createCatDtoTextTranspiled);
    });
    it('should add partial metadata factory when some decorators exist', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_alt_dto_1.createCatDtoAltText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [(0, compiler_plugin_1.before)({ introspectComments: true }, fakeProgram)]
            }
        });
        expect(result.outputText).toEqual(create_cat_alt_dto_1.createCatDtoTextAltTranspiled);
    });
    it('should add partial metadata factory when some decorators exist when exist node without type', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat-alt2.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_alt2_dto_1.createCatDtoAlt2Text, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_alt2_dto_1.createCatDtoTextAlt2Transpiled);
    });
    it('should manage imports statements when code "downleveled"', () => {
        const options = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES5,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'es5-class.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(es5_class_dto_1.es5CreateCatDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        const [tsVersionMajor] = ts.versionMajorMinor?.split('.').map((x) => +x);
        if (tsVersionMajor === 5) {
            expect(result.outputText).toEqual(es5_class_dto_1.es5CreateCatDtoTextTranspiledV5);
        }
        else {
            expect(result.outputText).toEqual(es5_class_dto_1.es5CreateCatDtoTextTranspiled);
        }
    });
    it('should support & understand nullable type unions', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'nullable.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(nullable_dto_1.nullableDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(nullable_dto_1.nullableDtoTextTranspiled);
    });
    it('should remove properties from metadata when properties removed from dto', () => {
        const options = {
            module: ts.ModuleKind.CommonJS,
            target: ts.ScriptTarget.ES5,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'changed-class.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        ts.transpileModule(changed_class_dto_1.originalCatDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        const changedResult = ts.transpileModule(changed_class_dto_1.changedCatDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        expect(changedResult.outputText).toEqual(changed_class_dto_1.changedCatDtoTextTranspiled);
    });
    it('should support & understand string literals', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'string-literal.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(string_literal_dto_1.stringLiteralDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({ introspectComments: true, classValidatorShim: true }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(string_literal_dto_1.stringLiteralDtoTextTranspiled);
    });
    it('should support & understand parameter properties', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'parameter-property.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(parameter_property_dto_1.parameterPropertyDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        introspectComments: true,
                        classValidatorShim: true,
                        parameterProperties: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(parameter_property_dto_1.parameterPropertyDtoTextTranspiled);
    });
    it('should ignore Exclude decorator', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat-exclude.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_exclude_dto_1.createCatExcludeDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        classValidatorShim: true,
                        classTransformerShim: false,
                        dtoKeyOfComment: 'title',
                        introspectComments: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_exclude_dto_1.createCatIgnoreExcludeDtoTextTranspiled);
    });
    it('should hide properties decorated with the Exclude decorator', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat-exclude.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_exclude_dto_1.createCatExcludeDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        classValidatorShim: true,
                        classTransformerShim: true,
                        dtoKeyOfComment: 'title',
                        introspectComments: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_exclude_dto_1.createCatExcludeDtoTextTranspiled);
    });
    it('should hide a property with conflicting decorators', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat-priority.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const debugLoggerSpy = jest.spyOn(plugin_debug_logger_1.pluginDebugLogger, 'debug');
        const result = ts.transpileModule(create_cat_priority_dto_1.createCatPriorityDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        classValidatorShim: true,
                        classTransformerShim: true,
                        dtoKeyOfComment: 'title',
                        introspectComments: true,
                        debug: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_priority_dto_1.createCatPriorityDtoTextTranspiled);
        expect(debugLoggerSpy).toHaveBeenCalledWith('"CreateCatDto->hidden" has conflicting decorators, excluding as @ApiHideProperty() takes priority.');
    });
    it('should add the metadata factory only when decorators exist', () => {
        const options = {
            module: ts.ModuleKind.ES2020,
            target: ts.ScriptTarget.ES2020,
            newLine: ts.NewLineKind.LineFeed,
            noEmitHelpers: true,
            experimentalDecorators: true,
            strict: true
        };
        const filename = 'create-cat-exclusive.dto.ts';
        const fakeProgram = ts.createProgram([filename], options);
        const result = ts.transpileModule(create_cat_exclusive_dto_1.createCatExclusiveDtoText, {
            compilerOptions: options,
            fileName: filename,
            transformers: {
                before: [
                    (0, compiler_plugin_1.before)({
                        classValidatorShim: true,
                        classTransformerShim: 'exclusive',
                        dtoKeyOfComment: 'title',
                        introspectComments: true
                    }, fakeProgram)
                ]
            }
        });
        expect(result.outputText).toEqual(create_cat_exclusive_dto_1.createCatExclusiveDtoTextTranspiled);
    });
});
