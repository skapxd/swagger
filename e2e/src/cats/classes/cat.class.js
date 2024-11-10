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
exports.Cat = void 0;
const lib_1 = require("../../../../lib");
const pagination_query_dto_1 = require("../dto/pagination-query.dto");
class Cat {
}
exports.Cat = Cat;
__decorate([
    (0, lib_1.ApiProperty)({ example: 'Kitty', description: 'The name of the Cat' }),
    __metadata("design:type", String)
], Cat.prototype, "name", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ example: 1, minimum: 0, description: 'The age of the Cat' }),
    __metadata("design:type", Number)
], Cat.prototype, "age", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        example: 'Maine Coon',
        description: 'The breed of the Cat'
    }),
    __metadata("design:type", String)
], Cat.prototype, "breed", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        name: '_tags',
        type: [String]
    }),
    __metadata("design:type", Array)
], Cat.prototype, "tags", void 0);
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", Date)
], Cat.prototype, "createdAt", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        type: String,
        isArray: true
    }),
    __metadata("design:type", Array)
], Cat.prototype, "urls", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        name: '_options',
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
], Cat.prototype, "options", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        type: 'object',
        properties: {
            name: {
                type: 'string',
                example: 'ErrorName'
            },
            status: {
                type: 'number',
                example: 400
            }
        },
        required: ['name', 'status']
    }),
    __metadata("design:type", Object)
], Cat.prototype, "rawDefinition", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum
    }),
    __metadata("design:type", String)
], Cat.prototype, "enum", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        isArray: true
    }),
    __metadata("design:type", Array)
], Cat.prototype, "enumArr", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'LettersEnum',
        description: 'A small assortment of letters?',
        default: 'A',
        deprecated: true
    }),
    __metadata("design:type", String)
], Cat.prototype, "enumWithRef", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        oneOf: [
            { type: 'array', items: { type: 'string' } },
            { type: 'array', items: { type: 'number' } },
            { type: 'array', items: { type: 'boolean' } }
        ],
        description: 'Array of values that uses "oneOf"'
    }),
    __metadata("design:type", Array)
], Cat.prototype, "oneOfExample", void 0);
__decorate([
    (0, lib_1.ApiProperty)({ type: [String], link: () => Cat }),
    __metadata("design:type", Array)
], Cat.prototype, "kittenIds", void 0);
