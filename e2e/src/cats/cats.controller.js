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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CatsController = void 0;
const common_1 = require("@nestjs/common");
const lib_1 = require("../../../lib");
const cats_service_1 = require("./cats.service");
const cat_class_1 = require("./classes/cat.class");
const create_cat_dto_1 = require("./dto/create-cat.dto");
const pagination_query_dto_1 = require("./dto/pagination-query.dto");
const cat_breed_enum_1 = require("./enums/cat-breed.enum");
let CatsController = class CatsController {
    constructor(catsService) {
        this.catsService = catsService;
    }
    async create(createCatDto) {
        return this.catsService.create(createCatDto);
    }
    async createExplicitBody(createCatDto) {
        return this.catsService.create(createCatDto);
    }
    findOne(id) {
        return this.catsService.findOne(+id);
    }
    findAll(paginationQuery) { }
    findAllWithExplicitQuery(paginationQuery) { }
    findAllBulk(paginationQuery) { }
    async createBulk(createCatDto) {
        return null;
    }
    async createAsFormData(createCatDto) {
        return this.catsService.create(createCatDto);
    }
    getSite() { }
    getWithEnumParam(type) { }
    getWithEnumNamedParam(type) { }
    getWithRandomQuery(type) { }
    download() { }
    rawSchemaResponse() { }
};
exports.CatsController = CatsController;
__decorate([
    (0, lib_1.ApiCallbacks)({
        name: 'mySecondEvent',
        callbackUrl: '{$request.body#/callbackUrl}',
        method: 'post',
        requestBody: {
            type: cat_class_1.Cat
        },
        expectedResponse: {
            status: 200
        }
    }),
    (0, lib_1.ApiCallbacks)({
        name: 'myEvent',
        callbackUrl: '{$request.body#/callbackUrl}',
        method: 'post',
        requestBody: {
            type: cat_class_1.Cat
        },
        expectedResponse: {
            status: 200
        }
    }),
    (0, lib_1.ApiTags)('create cats'),
    (0, common_1.Post)(),
    (0, lib_1.ApiOperation)({ summary: 'Create cat' }),
    (0, lib_1.ApiResponse)({
        status: 201,
        description: 'The record has been successfully created.',
        type: () => cat_class_1.Cat
    }),
    (0, lib_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    (0, lib_1.ApiExtension)('x-foo', { test: 'bar ' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "create", null);
__decorate([
    (0, common_1.Post)('explicit-body'),
    (0, lib_1.ApiBody)({
        type: create_cat_dto_1.CreateCatDto,
        examples: {
            mau: {
                summary: 'Mau example',
                value: {
                    name: 'Mau cat',
                    age: 5,
                    breed: 'Mau'
                }
            }
        }
    }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "createExplicitBody", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, lib_1.ApiResponse)({
        status: 200,
        description: 'The found record',
        type: cat_class_1.Cat
    }),
    (0, lib_1.ApiExtension)('x-auth-type', 'NONE'),
    (0, lib_1.ApiDefaultGetter)(cat_class_1.Cat, 'id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", cat_class_1.Cat)
], CatsController.prototype, "findOne", null);
__decorate([
    (0, common_1.Get)(),
    (0, lib_1.ApiExtension)('x-codeSamples', [
        { lang: 'JavaScript', source: "console.log('Hello World');" }
    ]),
    (0, lib_1.ApiExtension)('x-multiple', { test: 'test' }),
    (0, lib_1.ApiQuery)({
        name: 'catBreeds',
        enum: cat_breed_enum_1.CatBreed,
        isArray: true
    }),
    (0, lib_1.ApiTags)('tag1'),
    (0, lib_1.ApiTags)('tag2'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_query_dto_1.PaginationQuery]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAll", null);
__decorate([
    (0, lib_1.ApiQuery)({ type: pagination_query_dto_1.PaginationQuery }),
    (0, common_1.Get)('explicit-query'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pagination_query_dto_1.PaginationQuery]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAllWithExplicitQuery", null);
__decorate([
    (0, common_1.Get)('bulk'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "findAllBulk", null);
__decorate([
    (0, common_1.Post)('bulk'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "createBulk", null);
__decorate([
    (0, lib_1.ApiConsumes)('application/x-www-form-urlencoded'),
    (0, common_1.Post)('as-form-data'),
    (0, lib_1.ApiOperation)({ summary: 'Create cat' }),
    (0, lib_1.ApiResponse)({
        status: 201,
        description: 'The record has been successfully created.',
        type: cat_class_1.Cat
    }),
    (0, lib_1.ApiResponse)({ status: 403, description: 'Forbidden.' }),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_cat_dto_1.CreateCatDto]),
    __metadata("design:returntype", Promise)
], CatsController.prototype, "createAsFormData", null);
__decorate([
    (0, common_1.Get)('site*'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getSite", null);
__decorate([
    (0, common_1.Get)('with-enum/:type'),
    (0, lib_1.ApiParam)({
        name: 'type',
        enum: pagination_query_dto_1.LettersEnum
    }),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getWithEnumParam", null);
__decorate([
    (0, common_1.Get)('with-enum-named/:type'),
    (0, lib_1.ApiParam)({
        name: 'type',
        enum: pagination_query_dto_1.LettersEnum,
        enumName: 'Letter',
        enumSchema: {
            description: 'This is a description for the Letters schema',
            deprecated: true
        },
        description: "This is a description for 'type' query parameter",
        deprecated: false
    }),
    __param(0, (0, common_1.Param)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getWithEnumNamedParam", null);
__decorate([
    (0, common_1.Get)('with-random-query'),
    (0, lib_1.ApiQuery)({
        name: 'type',
        type: String,
        minLength: 10,
        maxLength: 100
    }),
    (0, lib_1.ApiQuery)({
        name: 'filter',
        required: false,
        content: {
            'application/json': {
                schema: {
                    type: 'string'
                }
            }
        }
    }),
    __param(0, (0, common_1.Query)('type')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "getWithRandomQuery", null);
__decorate([
    (0, common_1.Get)('download'),
    (0, lib_1.ApiOperation)({
        responses: {
            '200': {
                description: 'binary file for download',
                content: {
                    'application/pdf': { schema: { type: 'string', format: 'binary' } },
                    'image/jpeg': { schema: { type: 'string', format: 'binary' } }
                }
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "download", null);
__decorate([
    (0, common_1.Get)('raw-schema-response'),
    (0, lib_1.ApiResponse)({
        status: common_1.HttpStatus.OK,
        description: 'The paginated response',
        schema: {
            type: 'object',
            properties: {
                data: {
                    type: 'array',
                    items: { $ref: (0, lib_1.getSchemaPath)(cat_class_1.Cat) }
                },
                pageInfo: {
                    type: 'object',
                    properties: {
                        hasPreviousPage: { type: 'boolean' },
                        hasNextPage: { type: 'boolean' },
                        startCursor: { type: 'string' },
                        endCursor: { type: 'string' }
                    }
                }
            }
        }
    }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CatsController.prototype, "rawSchemaResponse", null);
exports.CatsController = CatsController = __decorate([
    (0, lib_1.ApiSecurity)('basic'),
    (0, lib_1.ApiBearerAuth)(),
    (0, lib_1.ApiSecurity)({ key2: [], key1: [] }),
    (0, lib_1.ApiTags)('cats'),
    (0, lib_1.ApiHeader)({
        name: 'header',
        required: false,
        description: 'Test',
        schema: { default: 'test' }
    }),
    (0, common_1.Controller)('cats'),
    __metadata("design:paramtypes", [cats_service_1.CatsService])
], CatsController);
