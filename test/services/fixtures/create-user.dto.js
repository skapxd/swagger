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
exports.CreateUserDto = void 0;
require("reflect-metadata");
const decorators_1 = require("../../../lib/decorators");
const create_profile_dto_1 = require("./create-profile.dto");
class House {
}
class CreateUserDto {
    static _OPENAPI_METADATA_FACTORY() {
        return {
            tags: { type: () => [String] },
            twoDimensionPrimitives: { type: () => [[String]] }
        };
    }
}
exports.CreateUserDto = CreateUserDto;
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "login", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        example: 'password123'
    }),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, decorators_1.ApiPropertyOptional)({
        format: 'int64',
        example: 10
    }),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "age", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        required: false,
        readOnly: true,
        type: 'array',
        maxItems: 10,
        minItems: 1,
        items: {
            type: 'array',
            items: {
                type: 'number'
            }
        }
    }),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "custom", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        description: 'Profile',
        nullable: true,
        type: () => create_profile_dto_1.CreateProfileDto
    }),
    __metadata("design:type", create_profile_dto_1.CreateProfileDto)
], CreateUserDto.prototype, "profile", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "tags", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "twoDimensionPrimitives", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        type: () => [[create_profile_dto_1.CreateProfileDto]]
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "twoDimensionModels", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        type: String,
        isArray: true,
        format: 'uri'
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "urls", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        type: 'integer',
        isArray: true
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "luckyNumbers", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        type: 'array',
        items: {
            type: 'object',
            properties: {
                isReadonly: {
                    type: 'string'
                }
            }
        }
    }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "options", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        oneOf: [
            { $ref: '#/components/schemas/Cat' },
            { $ref: '#/components/schemas/Dog' }
        ],
        discriminator: { propertyName: 'pet_type' }
    }),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "allOf", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({ type: [House] }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "houses", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateUserDto.prototype, "createdAt", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", BigInt)
], CreateUserDto.prototype, "amount", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({ type: [String], format: 'uuid' }),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "formatArray", void 0);
