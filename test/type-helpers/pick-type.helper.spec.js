"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const decorators_1 = require("../../lib/decorators");
const plugin_constants_1 = require("../../lib/plugin/plugin-constants");
const model_properties_accessor_1 = require("../../lib/services/model-properties-accessor");
const type_helpers_1 = require("../../lib/type-helpers");
describe('PickType', () => {
    class CreateUserDto {
        static [plugin_constants_1.METADATA_FACTORY_NAME]() {
            return {
                firstName: { required: true, type: () => String },
                lastName: { required: true, type: () => String }
            };
        }
    }
    __decorate([
        (0, class_transformer_1.Transform)((str) => str + '_transformed'),
        (0, class_validator_1.MinLength)(10),
        (0, decorators_1.ApiProperty)({ required: true }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "login", void 0);
    __decorate([
        (0, class_validator_1.MinLength)(10),
        (0, decorators_1.ApiProperty)({ minLength: 10 }),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    class UpdateUserDto extends (0, type_helpers_1.PickType)(CreateUserDto, ['login', 'firstName']) {
    }
    let modelPropertiesAccessor;
    beforeEach(() => {
        modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
    });
    describe('OpenAPI metadata', () => {
        it('should pick "login" property', () => {
            const prototype = UpdateUserDto.prototype;
            modelPropertiesAccessor.applyMetadataFactory(prototype);
            expect(modelPropertiesAccessor.getModelProperties(prototype)).toEqual([
                'login',
                'firstName'
            ]);
        });
    });
});
