"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const metadata_loader_1 = require("../../lib/plugin/metadata-loader");
const model_properties_accessor_1 = require("../../lib/services/model-properties-accessor");
const type_helpers_1 = require("../../lib/type-helpers");
const create_user_dto_fixture_1 = require("./fixtures/create-user-dto.fixture");
const serialized_metadata_fixture_1 = require("./fixtures/serialized-metadata.fixture");
class UpdateUserDto extends (0, type_helpers_1.OmitType)(create_user_dto_fixture_1.CreateUserDto, ['login', 'lastName']) {
}
describe('OmitType', () => {
    const metadataLoader = new metadata_loader_1.MetadataLoader();
    let modelPropertiesAccessor;
    beforeEach(() => {
        modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
    });
    describe('OpenAPI metadata', () => {
        it('should omit "login" property', async () => {
            await metadataLoader.load(serialized_metadata_fixture_1.SERIALIZED_METADATA);
            const prototype = UpdateUserDto.prototype;
            modelPropertiesAccessor.applyMetadataFactory(prototype);
            expect(modelPropertiesAccessor.getModelProperties(prototype)).toEqual([
                'password',
                'firstName',
                'active',
                'role'
            ]);
        });
    });
});
