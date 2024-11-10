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
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateCatDto = exports.CategoryState = void 0;
const common_1 = require("@nestjs/common");
const class_validator_1 = require("class-validator");
const node_crypto_1 = require("node:crypto");
const lib_1 = require("../../../../lib");
const extra_model_dto_1 = require("./extra-model.dto");
const pagination_query_dto_1 = require("./pagination-query.dto");
const tag_dto_1 = require("./tag.dto");
const owner_1 = require("@package-a/owner");
const absolute_owner_dto_1 = require("different-cats/dto/absolute-owner.dto");
var NonExportedEnum;
(function (NonExportedEnum) {
    NonExportedEnum["YES"] = "YES";
    NonExportedEnum["NO"] = "NO";
})(NonExportedEnum || (NonExportedEnum = {}));
class NonExportedClass {
}
var CategoryState;
(function (CategoryState) {
    CategoryState["OK"] = "OK";
    CategoryState["DEPRECATED"] = "DEPRECATED";
})(CategoryState || (exports.CategoryState = CategoryState = {}));
const MAX_AGE = 200;
let CreateCatDto = class CreateCatDto {
    constructor() {
        this.positive = 5;
        this.negative = -1;
        this.lengthMin = null;
        this.date = new Date();
        this.active = false;
        this.name = (0, node_crypto_1.randomUUID)();
        this.age = 14;
        this.breed = 'Persian';
        this.logger = new common_1.ConsoleLogger();
    }
};
exports.CreateCatDto = CreateCatDto;
__decorate([
    (0, class_validator_1.IsIn)(['a', 'b']),
    __metadata("design:type", String)
], CreateCatDto.prototype, "isIn", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^[+]?abc$/),
    __metadata("design:type", String)
], CreateCatDto.prototype, "pattern", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    __metadata("design:type", Number)
], CreateCatDto.prototype, "positive", void 0);
__decorate([
    (0, class_validator_1.IsNegative)(),
    __metadata("design:type", Number)
], CreateCatDto.prototype, "negative", void 0);
__decorate([
    (0, class_validator_1.Length)(2),
    __metadata("design:type", String)
], CreateCatDto.prototype, "lengthMin", void 0);
__decorate([
    (0, class_validator_1.Length)(3, 5),
    __metadata("design:type", String)
], CreateCatDto.prototype, "lengthMinMax", void 0);
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateCatDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(MAX_AGE),
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
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum'
    }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "enum", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: common_1.HttpStatus,
        enumName: 'HttpStatus'
    }),
    __metadata("design:type", Number)
], CreateCatDto.prototype, "externalEnum", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: owner_1.Owner,
        enumName: 'Owner'
    }),
    __metadata("design:type", typeof (_a = typeof owner_1.Owner !== "undefined" && owner_1.Owner) === "function" ? _a : Object)
], CreateCatDto.prototype, "customPathImportOwner", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: absolute_owner_dto_1.AbsoluteOwner,
        enumName: 'AbsoluteOwner'
    }),
    __metadata("design:type", typeof (_b = typeof absolute_owner_dto_1.AbsoluteOwner !== "undefined" && absolute_owner_dto_1.AbsoluteOwner) === "function" ? _b : Object)
], CreateCatDto.prototype, "absoluteImportOwner", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum',
        isArray: true
    }),
    __metadata("design:type", String)
], CreateCatDto.prototype, "enumArr", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ description: 'tag', required: false }),
    __metadata("design:type", tag_dto_1.TagDto)
], CreateCatDto.prototype, "tag", void 0);
exports.CreateCatDto = CreateCatDto = __decorate([
    (0, lib_1.ApiExtraModels)(extra_model_dto_1.ExtraModel)
], CreateCatDto);
