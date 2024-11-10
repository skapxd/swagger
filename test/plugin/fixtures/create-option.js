"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mergedCliPluginSingleOption = exports.mergedCliPluginMultiOption = exports.createCliPluginSingleOption = exports.createCliPluginMultiOption = void 0;
exports.createCliPluginMultiOption = {
    dtoFileNameSuffix: ['.ts', '.dto.ts'],
    introspectComments: true
};
exports.createCliPluginSingleOption = {
    dtoFileNameSuffix: ['.ts'],
    introspectComments: true
};
exports.mergedCliPluginMultiOption = {
    dtoFileNameSuffix: ['.dto.ts'],
    controllerFileNameSuffix: ['.controller.ts'],
    classValidatorShim: true,
    classTransformerShim: false,
    dtoKeyOfComment: 'description',
    controllerKeyOfComment: 'summary',
    introspectComments: true,
    readonly: false,
    debug: false
};
exports.mergedCliPluginSingleOption = {
    dtoFileNameSuffix: ['.dto.ts', '.entity.ts'],
    controllerFileNameSuffix: ['.controller.ts'],
    classValidatorShim: true,
    classTransformerShim: false,
    dtoKeyOfComment: 'description',
    controllerKeyOfComment: 'summary',
    introspectComments: true,
    readonly: false,
    debug: false
};
