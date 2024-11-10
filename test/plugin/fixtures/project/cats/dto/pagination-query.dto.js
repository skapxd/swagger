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
exports.PaginationQuery = exports.LettersEnum = void 0;
const lib_1 = require("../../../../lib");
var LettersEnum;
(function (LettersEnum) {
    LettersEnum["A"] = "A";
    LettersEnum["B"] = "B";
    LettersEnum["C"] = "C";
})(LettersEnum || (exports.LettersEnum = LettersEnum = {}));
class PaginationQuery {
    static _OPENAPI_METADATA_FACTORY() {
        return {
            sortBy: { type: () => [String] }
        };
    }
}
exports.PaginationQuery = PaginationQuery;
__decorate([
    (0, lib_1.ApiProperty)({
        minimum: 0,
        maximum: 10000,
        title: 'Page',
        exclusiveMaximum: true,
        exclusiveMinimum: true,
        format: 'int32',
        default: 0,
        example: 123
    }),
    __metadata("design:type", Number)
], PaginationQuery.prototype, "page", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        name: '_sortBy',
        nullable: true,
        example: ['sort1', 'sort2']
    }),
    __metadata("design:type", Array)
], PaginationQuery.prototype, "sortBy", void 0);
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", Number)
], PaginationQuery.prototype, "limit", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        oneOf: [
            {
                minimum: 0,
                maximum: 10,
                format: 'int32'
            },
            {
                minimum: 100,
                maximum: 100,
                format: 'int32'
            }
        ],
    }),
    __metadata("design:type", Number)
], PaginationQuery.prototype, "constrainedLimit", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: LettersEnum,
        enumName: 'LettersEnum'
    }),
    __metadata("design:type", String)
], PaginationQuery.prototype, "enum", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: LettersEnum,
        enumName: 'LettersEnum',
        isArray: true
    }),
    __metadata("design:type", Array)
], PaginationQuery.prototype, "enumArr", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        enum: LettersEnum,
        enumName: 'Letter',
        isArray: true,
    }),
    __metadata("design:type", Array)
], PaginationQuery.prototype, "letters", void 0);
__decorate([
    (0, lib_1.ApiProperty)(),
    __metadata("design:type", Date)
], PaginationQuery.prototype, "beforeDate", void 0);
__decorate([
    (0, lib_1.ApiProperty)({
        type: 'object',
        additionalProperties: true
    }),
    __metadata("design:type", Object)
], PaginationQuery.prototype, "filter", void 0);
