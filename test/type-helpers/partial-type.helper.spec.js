"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const constants_1 = require("../../lib/constants");
const metadata_loader_1 = require("../../lib/plugin/metadata-loader");
const model_properties_accessor_1 = require("../../lib/services/model-properties-accessor");
const type_helpers_1 = require("../../lib/type-helpers");
const create_user_dto_fixture_1 = require("./fixtures/create-user-dto.fixture");
const serialized_metadata_fixture_1 = require("./fixtures/serialized-metadata.fixture");
class UpdateUserDto extends (0, type_helpers_1.PartialType)(create_user_dto_fixture_1.CreateUserDto) {
}
describe('PartialType', () => {
    const metadataLoader = new metadata_loader_1.MetadataLoader();
    let modelPropertiesAccessor;
    beforeEach(() => {
        modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
    });
    describe('Validation metadata', () => {
        it('should apply @IsOptional to properties reflected by the plugin', async () => {
            const updateDto = new UpdateUserDto();
            updateDto.firstName = null;
            const validationErrors = await (0, class_validator_1.validate)(updateDto);
            expect(validationErrors).toHaveLength(0);
        });
        it('should apply @IsOptional to properties reflected by the plugin if option `skipNullProperties` is true', async () => {
            class UpdateUserWithNullableDto extends (0, type_helpers_1.PartialType)(create_user_dto_fixture_1.CreateUserDto, {
                skipNullProperties: true
            }) {
            }
            const updateDto = new UpdateUserWithNullableDto();
            updateDto.firstName = null;
            const validationErrors = await (0, class_validator_1.validate)(updateDto);
            expect(validationErrors).toHaveLength(0);
        });
        it('should apply @IsOptional to properties reflected by the plugin if option `skipNullProperties` is undefined', async () => {
            class UpdateUserWithoutNullableDto extends (0, type_helpers_1.PartialType)(create_user_dto_fixture_1.CreateUserDto, {}) {
            }
            const updateDto = new UpdateUserWithoutNullableDto();
            updateDto.firstName = null;
            const validationErrors = await (0, class_validator_1.validate)(updateDto);
            expect(validationErrors).toHaveLength(0);
        });
        it('should apply @ValidateIf to properties reflected by the plugin if option `skipNullProperties` is false', async () => {
            class UpdateUserWithoutNullableDto extends (0, type_helpers_1.PartialType)(create_user_dto_fixture_1.CreateUserDto, {
                skipNullProperties: false
            }) {
            }
            const updateDto = new UpdateUserWithoutNullableDto();
            updateDto.firstName = null;
            const validationErrors = await (0, class_validator_1.validate)(updateDto);
            expect(validationErrors).toHaveLength(1);
            expect(validationErrors[0].constraints).toEqual({
                isString: 'firstName must be a string'
            });
        });
    });
    describe('OpenAPI metadata', () => {
        it('should return partial class', async () => {
            await metadataLoader.load(serialized_metadata_fixture_1.SERIALIZED_METADATA);
            const prototype = UpdateUserDto.prototype;
            modelPropertiesAccessor.applyMetadataFactory(prototype);
            expect(modelPropertiesAccessor.getModelProperties(prototype)).toEqual([
                'login',
                'password',
                'firstName',
                'lastName',
                'active',
                'role'
            ]);
        });
        it('should set "required" option to "false" for each property', () => {
            const classRef = UpdateUserDto.prototype;
            const keys = modelPropertiesAccessor.getModelProperties(classRef);
            const metadata = keys.map((key) => {
                return Reflect.getMetadata(constants_1.DECORATORS.API_MODEL_PROPERTIES, classRef, key);
            });
            expect(metadata[0]).toEqual({
                isArray: false,
                required: false,
                type: String
            });
            expect(metadata[1]).toEqual({
                isArray: false,
                required: false,
                minLength: 10,
                type: String
            });
            expect(metadata[2]).toEqual({
                isArray: false,
                required: false,
                type: String
            });
        });
    });
});
