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
exports.CreateCatDto = void 0;
const lib_1 = require("../../../../lib");
const extra_model_dto_1 = require("./extra-model.dto");
const pagination_query_dto_1 = require("./pagination-query.dto");
const tag_dto_1 = require("./tag.dto");
let CreateCatDto = class CreateCatDto {
};
exports.CreateCatDto = CreateCatDto;
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "name", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ minimum: 1, maximum: 200 }),
    __metadata("design:type", Number)
], CreateCatDto.prototype, "age", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ name: '_breed', type: String }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "breed", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        format: 'uri',
        type: [String]
    }),
    __metadata("design:type", Array)
], CreateCatDto.prototype, "tags", void 0);
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", Date)
], CreateCatDto.prototype, "createdAt", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        type: 'string',
        isArray: true
    }),
    __metadata("design:type", Array)
], CreateCatDto.prototype, "urls", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
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
], CreateCatDto.prototype, "options", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        description: 'Enum with description'
    }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "enumWithDescription", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum'
    }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "enum", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum',
        isArray: true,
        description: 'This is a description for the enumArr attribute'
    }),
    __metadata("design:type", Array)
], CreateCatDto.prototype, "enumArr", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum',
        description: 'A small assortment of letters (in DTO)?',
        default: 'A',
        deprecated: true,
        enumSchema: {
            description: 'This is a description for the LettersEnum schema',
            deprecated: true
        }
    }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "enumWithRef", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ description: 'tag', required: false }),
    __metadata("design:type", tag_dto_1.TagDto)
], CreateCatDto.prototype, "tag", void 0);
exports.CreateCatDto = CreateCatDto = __decorate([
    (0, lib_1.ApiExtraModels)(extra_model_dto_1.ExtraModelDto),
    (0, lib_1.ApiExtension)('x-tags', ['foo', 'bar'])
], CreateCatDto);
