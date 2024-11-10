"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_options_1 = require("../../lib/plugin/merge-options");
const create_option_1 = require("./fixtures/create-option");
describe('CLI Plugin options', () => {
    it('should skip element when dtoFileNameSuffix key has more than one element and include ".ts"', () => {
        const merged = (0, merge_options_1.mergePluginOptions)(create_option_1.createCliPluginMultiOption);
        expect(JSON.stringify(merged)).toEqual(JSON.stringify(create_option_1.mergedCliPluginMultiOption));
    });
    it('should delete key when dtoFileNameSuffix key has 1 element and element is “.ts”', () => {
        const merged = (0, merge_options_1.mergePluginOptions)(create_option_1.createCliPluginSingleOption);
        expect(JSON.stringify(merged)).toEqual(JSON.stringify(create_option_1.mergedCliPluginSingleOption));
    });
});
