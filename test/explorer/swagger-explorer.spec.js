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
const common_1 = require("@nestjs/common");
const interfaces_1 = require("@nestjs/common/interfaces");
const core_1 = require("@nestjs/core");
const lodash_1 = require("lodash");
const decorators_1 = require("../../lib/decorators");
const plugin_constants_1 = require("../../lib/plugin/plugin-constants");
const model_properties_accessor_1 = require("../../lib/services/model-properties-accessor");
const schema_object_factory_1 = require("../../lib/services/schema-object-factory");
const swagger_types_mapper_1 = require("../../lib/services/swagger-types-mapper");
const global_parameters_storage_1 = require("../../lib/storages/global-parameters.storage");
const swagger_explorer_1 = require("../../lib/swagger-explorer");
describe('SwaggerExplorer', () => {
    const schemaObjectFactory = new schema_object_factory_1.SchemaObjectFactory(new model_properties_accessor_1.ModelPropertiesAccessor(), new swagger_types_mapper_1.SwaggerTypesMapper());
    const methodKeyOperationIdFactory = (_, methodKey) => methodKey;
    const controllerKeyMethodKeyOperationIdFactory = (controllerKey, methodKey) => `${controllerKey}.${methodKey}`;
    const controllerKeyMethodKeyVersionKeyOperationIdFactory = (controllerKey, methodKey, versionKey) => versionKey
        ? `${controllerKey}.${methodKey}.${versionKey}`
        : `${controllerKey}.${methodKey}`;
    describe('when module only uses metadata', () => {
        class Foo {
        }
        class CreateFoo {
        }
        let LettersEnum;
        (function (LettersEnum) {
            LettersEnum["A"] = "A";
            LettersEnum["B"] = "B";
            LettersEnum["C"] = "C";
        })(LettersEnum || (LettersEnum = {}));
        class ListEntitiesDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)({ minimum: 0 }),
            __metadata("design:type", Number)
        ], ListEntitiesDto.prototype, "page", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ListEntitiesDto.prototype, "order", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ type: [String], minItems: 3 }),
            __metadata("design:type", Array)
        ], ListEntitiesDto.prototype, "sortBy", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                enum: LettersEnum,
                enumName: 'LettersEnum',
                enumSchema: {
                    description: 'This is a description for the LettersEnum schema',
                    deprecated: true
                },
                description: "This is a description for 'enum' property",
                deprecated: false,
                default: LettersEnum.B
            }),
            __metadata("design:type", String)
        ], ListEntitiesDto.prototype, "enum", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                enum: LettersEnum,
                enumName: 'LettersEnum',
                description: "This is a description for 'enumArr' property",
                deprecated: false,
                default: [LettersEnum.A],
                isArray: true
            }),
            __metadata("design:type", Array)
        ], ListEntitiesDto.prototype, "enumArr", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                enum: () => LettersEnum,
                enumName: 'LettersEnum'
            }),
            __metadata("design:type", String)
        ], ListEntitiesDto.prototype, "enumFunction", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ type: [String], format: 'uuid' }),
            __metadata("design:type", Array)
        ], ListEntitiesDto.prototype, "formatArray", void 0);
        class ErrorEntitiesDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", Boolean)
        ], ErrorEntitiesDto.prototype, "isError", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ErrorEntitiesDto.prototype, "reason", void 0);
        let FooController = class FooController {
            create(createFoo, listEntities) {
                return Promise.resolve({});
            }
            find(objectId, q) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiOperation)({ summary: 'Create foo' }),
            (0, decorators_1.ApiCreatedResponse)({
                type: Foo,
                description: 'Newly created Foo object',
                example: {
                    id: 'foo',
                    name: 'Foo'
                }
            }),
            (0, decorators_1.ApiBadRequestResponse)({
                type: Foo,
                description: 'Invalid parameter error',
                examples: {
                    ParameterInvalidName: {
                        summary: 'failure create foo object (invalid name)',
                        value: {
                            isError: true,
                            reason: 'Foo parameter name is invalid'
                        }
                    },
                    ParameterInvalidEmail: {
                        summary: 'failure create foo object (invalid email)',
                        value: {
                            isError: true,
                            reason: 'Foo parameter email is invalid'
                        }
                    }
                }
            }),
            __param(0, (0, common_1.Body)()),
            __param(1, (0, common_1.Query)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [CreateFoo,
                ListEntitiesDto]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        __decorate([
            (0, common_1.Get)(['foos/:objectId', 'foo/:objectId']),
            (0, decorators_1.ApiOperation)({ summary: 'List all Foos' }),
            (0, decorators_1.ApiOkResponse)({ type: [Foo] }),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)('')
        ], FooController);
        it('sees two examples for error responses by same response code', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(routes[0].responses['400'].content['application/json'].examples.ParameterInvalidName).toBeDefined();
            expect(routes[0].responses['400'].content['application/json'].examples.ParameterInvalidEmail).toBeDefined();
        });
        it('sees two controller operations and their responses', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            const operationPrefix = 'FooController_';
            validateRoutes(routes, operationPrefix);
        });
        let FooWithMetadataController = class FooWithMetadataController {
            create(createFoo, listEntities) {
                return Promise.resolve({});
            }
            find(objectId, q) {
                return Promise.resolve([]);
            }
            static [plugin_constants_1.METADATA_FACTORY_NAME]() {
                return {
                    create: {
                        summary: 'Create foo',
                        example: {
                            id: 'foo',
                            name: 'Foo'
                        }
                    },
                    find: {
                        summary: 'List all Foos',
                        type: [Foo]
                    }
                };
            }
        };
        __decorate([
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiCreatedResponse)({
                type: Foo,
                description: 'Newly created Foo object',
                example: {
                    id: 'foo',
                    name: 'Foo'
                }
            }),
            __param(0, (0, common_1.Body)()),
            __param(1, (0, common_1.Query)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [CreateFoo,
                ListEntitiesDto]),
            __metadata("design:returntype", Promise)
        ], FooWithMetadataController.prototype, "create", null);
        __decorate([
            (0, common_1.Get)(['foos/:objectId', 'foo/:objectId']),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", Promise)
        ], FooWithMetadataController.prototype, "find", null);
        FooWithMetadataController = __decorate([
            (0, common_1.Controller)('')
        ], FooWithMetadataController);
        it('sees two controller operations and their responses (metadata cache)', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooWithMetadataController(),
                metatype: FooWithMetadataController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            const operationPrefix = 'FooWithMetadataController_';
            validateRoutes(routes, operationPrefix);
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix', methodKeyOperationIdFactory);
            const operationPrefix = '';
            validateRoutes(routes, operationPrefix);
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return controllerKey.methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix', controllerKeyMethodKeyOperationIdFactory);
            const operationPrefix = 'FooController.';
            validateRoutes(routes, operationPrefix);
        });
        const validateRoutes = (routes, operationPrefix) => {
            expect(routes.length).toEqual(3);
            expect(routes[0].root.operationId).toEqual(operationPrefix + 'create');
            expect(routes[0].root.method).toEqual('post');
            expect(routes[0].root.path).toEqual('/globalPrefix/modulePath/foos');
            expect(routes[0].root.summary).toEqual('Create foo');
            expect(routes[0].root.parameters.length).toEqual(7);
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        minimum: 0,
                        type: 'number'
                    }
                },
                {
                    in: 'query',
                    name: 'order',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'query',
                    name: 'sortBy',
                    required: true,
                    schema: {
                        minItems: 3,
                        items: {
                            type: 'string'
                        },
                        type: 'array'
                    }
                },
                {
                    in: 'query',
                    name: 'enum',
                    required: true,
                    deprecated: false,
                    description: "This is a description for 'enum' property",
                    schema: {
                        $ref: '#/components/schemas/LettersEnum'
                    }
                },
                {
                    in: 'query',
                    name: 'enumArr',
                    required: true,
                    deprecated: false,
                    description: "This is a description for 'enumArr' property",
                    schema: {
                        items: {
                            $ref: '#/components/schemas/LettersEnum'
                        },
                        type: 'array'
                    }
                },
                {
                    in: 'query',
                    name: 'enumFunction',
                    required: true,
                    schema: {
                        $ref: '#/components/schemas/LettersEnum'
                    }
                },
                {
                    in: 'query',
                    name: 'formatArray',
                    required: true,
                    schema: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                }
            ]);
            expect(routes[0].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/CreateFoo'
                        }
                    }
                }
            });
            const createdResponse = routes[0].responses['201'];
            expect(createdResponse.description).toEqual('Newly created Foo object');
            expect(createdResponse.content['application/json']).toEqual({
                schema: {
                    $ref: '#/components/schemas/Foo'
                },
                example: { id: 'foo', name: 'Foo' }
            });
            expect(createdResponse).not.toHaveProperty('example');
            expect(createdResponse).not.toHaveProperty('examples');
            expect(routes[1].root.operationId).toEqual(operationPrefix + 'find[0]');
            expect(routes[1].root.method).toEqual('get');
            expect(routes[1].root.path).toEqual('/globalPrefix/modulePath/foos/{objectId}');
            expect(routes[1].root.summary).toEqual('List all Foos');
            expect(routes[1].root.parameters.length).toEqual(2);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[1].responses['200'].description).toEqual('');
            expect(routes[1].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
            expect(routes[2].root.operationId).toEqual(operationPrefix + 'find[1]');
            expect(routes[2].root.method).toEqual('get');
            expect(routes[2].root.path).toEqual('/globalPrefix/modulePath/foo/{objectId}');
            expect(routes[2].root.summary).toEqual('List all Foos');
            expect(routes[2].root.parameters.length).toEqual(2);
            expect(routes[2].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[2].responses['200'].description).toEqual('');
            expect(routes[2].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
        };
    });
    describe('when explicit decorators and metadata are used', () => {
        class Foo {
        }
        class CreateFoo {
        }
        let FooController = class FooController {
            create(createFoo) {
                return Promise.resolve({});
            }
            find(objectId, q) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiBody)({ type: CreateFoo }),
            (0, decorators_1.ApiOperation)({ summary: 'Create foo' }),
            (0, decorators_1.ApiCreatedResponse)({
                type: Foo,
                description: 'Newly created Foo object'
            }),
            __param(0, (0, common_1.Body)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [CreateFoo]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({ name: 'objectId', type: 'string', format: 'uuid' }),
            (0, decorators_1.ApiQuery)({ name: 'page', type: 'string' }),
            (0, decorators_1.ApiOperation)({ summary: 'List all Foos' }),
            (0, decorators_1.ApiOkResponse)({ type: [Foo] }),
            (0, decorators_1.ApiDefaultResponse)({ type: [Foo] }),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)(''),
            (0, decorators_1.ApiBadRequestResponse)({ description: 'Bad request' })
        ], FooController);
        it('sees two controller operations and their responses', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), undefined, 'globalPrefix');
            const prefix = 'FooController_';
            validateRoutes(routes, prefix);
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), undefined, 'globalPrefix', methodKeyOperationIdFactory);
            const prefix = '';
            validateRoutes(routes, prefix);
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return controllerKey.methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), undefined, 'globalPrefix', controllerKeyMethodKeyOperationIdFactory);
            const prefix = 'FooController.';
            validateRoutes(routes, prefix);
        });
        const validateRoutes = (routes, operationPrefix) => {
            expect(routes.length).toEqual(2);
            expect(routes[0].root.operationId).toEqual(operationPrefix + 'create');
            expect(routes[0].root.method).toEqual('post');
            expect(routes[0].root.path).toEqual('/globalPrefix/foos');
            expect(routes[0].root.summary).toEqual('Create foo');
            expect(routes[0].root.parameters.length).toEqual(0);
            expect(routes[0].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/CreateFoo'
                        }
                    }
                }
            });
            expect(routes[0].responses['400'].description).toEqual('Bad request');
            expect(routes[0].responses['201'].description).toEqual('Newly created Foo object');
            expect(routes[0].responses['201'].content['application/json']).toEqual({
                schema: {
                    $ref: '#/components/schemas/Foo'
                }
            });
            expect(routes[1].root.operationId).toEqual(operationPrefix + 'find');
            expect(routes[1].root.method).toEqual('get');
            expect(routes[1].root.path).toEqual('/globalPrefix/foos/{objectId}');
            expect(routes[1].root.summary).toEqual('List all Foos');
            expect(routes[1].root.parameters.length).toEqual(2);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string',
                        format: 'uuid'
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[1].responses['200'].description).toEqual('');
            expect(routes[1].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
            expect(routes[1].responses.default.content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
        };
    });
    describe('when only explicit decorators are used', () => {
        class Foo {
        }
        class CreateFoo {
        }
        class ErrorEntitiesDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", Boolean)
        ], ErrorEntitiesDto.prototype, "isError", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ErrorEntitiesDto.prototype, "reason", void 0);
        let FooController = class FooController {
            create() {
                return Promise.resolve({});
            }
            find() {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, decorators_1.ApiConsumes)('application/xml'),
            (0, decorators_1.ApiProduces)('application/xml'),
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiBody)({ type: CreateFoo }),
            (0, decorators_1.ApiOperation)({ summary: 'Create foo' }),
            (0, decorators_1.ApiCreatedResponse)({
                type: Foo,
                description: 'Newly created Foo object'
            }),
            (0, decorators_1.ApiBadRequestResponse)({
                type: Foo,
                description: 'Invalid parameter error',
                examples: {
                    ParameterInvalidName: {
                        summary: 'failure create foo object (invalid name)',
                        value: {
                            isError: true,
                            reason: 'Foo parameter name is invalid'
                        }
                    },
                    ParameterInvalidEmail: {
                        summary: 'failure create foo object (invalid email)',
                        value: {
                            isError: true,
                            reason: 'Foo parameter email is invalid'
                        }
                    }
                }
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({ name: 'objectId', type: 'string' }),
            (0, decorators_1.ApiQuery)({ name: 'page', type: 'string' }),
            (0, decorators_1.ApiOperation)({ summary: 'List all Foos' }),
            (0, decorators_1.ApiOkResponse)({ type: [Foo] }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)('')
        ], FooController);
        it('sees two controller operations and their responses', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', undefined);
            const operationPrefix = 'FooController_';
            validateRoutes(routes, operationPrefix);
        });
        it('sees two examples for error responses for the same response code', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            const badRequestResponse = routes[0].responses['400'];
            expect(badRequestResponse.content['application/xml'].examples
                .ParameterInvalidName).toBeDefined();
            expect(badRequestResponse.content['application/xml'].examples
                .ParameterInvalidEmail).toBeDefined();
            expect(badRequestResponse).not.toHaveProperty('example');
            expect(badRequestResponse).not.toHaveProperty('examples');
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', undefined, methodKeyOperationIdFactory);
            const operationPrefix = '';
            validateRoutes(routes, operationPrefix);
        });
        it('sees two controller operations and their responses with custom operationIdFactory to return controllerKey.methodKey', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', undefined, controllerKeyMethodKeyOperationIdFactory);
            const operationPrefix = 'FooController.';
            validateRoutes(routes, operationPrefix);
        });
        const validateRoutes = (routes, operationPrefix) => {
            expect(routes.length).toEqual(2);
            expect(routes[0].root.operationId).toEqual(operationPrefix + 'create');
            expect(routes[0].root.method).toEqual('post');
            expect(routes[0].root.path).toEqual('/modulePath/foos');
            expect(routes[0].root.summary).toEqual('Create foo');
            expect(routes[0].root.parameters.length).toEqual(0);
            expect(routes[0].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/xml': {
                        schema: {
                            $ref: '#/components/schemas/CreateFoo'
                        }
                    }
                }
            });
            expect(routes[0].responses['201'].description).toEqual('Newly created Foo object');
            expect(routes[0].responses['201'].content['application/xml']).toEqual({
                schema: {
                    $ref: '#/components/schemas/Foo'
                }
            });
            expect(routes[1].root.operationId).toEqual(operationPrefix + 'find');
            expect(routes[1].root.method).toEqual('get');
            expect(routes[1].root.path).toEqual('/modulePath/foos/{objectId}');
            expect(routes[1].root.summary).toEqual('List all Foos');
            expect(routes[1].root.parameters.length).toEqual(2);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[1].responses['200'].description).toEqual('');
            expect(routes[1].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
        };
    });
    describe('when custom properties are passed', () => {
        class Foo {
        }
        class CreateFoo {
        }
        let FooController = class FooController {
            create() {
                return Promise.resolve({});
            }
            find() {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, decorators_1.ApiConsumes)('application/xml'),
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiBody)({ type: CreateFoo }),
            (0, decorators_1.ApiOperation)({
                summary: 'Create foo',
                operationId: 'FooController_create2',
                description: 'Allows creating Foo item',
                tags: ['foo']
            }),
            (0, decorators_1.ApiCreatedResponse)({
                description: 'Newly created Foo object',
                schema: {
                    type: 'object',
                    additionalProperties: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        __decorate([
            (0, common_1.Version)('2'),
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({
                name: 'objectId',
                schema: { type: 'integer', format: 'int64', maximum: 10, minimum: 0 }
            }),
            (0, decorators_1.ApiQuery)({ name: 'page', type: String }),
            (0, decorators_1.ApiOperation)({
                summary: 'List all Foos',
                operationId: 'FooController_find2'
            }),
            (0, decorators_1.ApiBody)({
                schema: {
                    type: 'array',
                    items: {
                        type: 'string',
                        default: 'available',
                        enum: ['available', 'pending', 'sold']
                    }
                }
            }),
            (0, decorators_1.ApiOkResponse)({ type: [Foo] }),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)('')
        ], FooController);
        it('should merge implicit metadata with explicit options', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const config = new core_1.ApplicationConfig();
            config.enableVersioning({
                type: common_1.VersioningType.URI
            });
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, config, 'modulePath', 'globalPrefix');
            validateRoutes(routes);
        });
        it('should merge implicit metadata with explicit options and use default operationIdFactory', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const config = new core_1.ApplicationConfig();
            config.enableVersioning({
                type: common_1.VersioningType.URI
            });
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, config, 'modulePath', 'globalPrefix');
            validateRoutes(routes);
        });
        const validateRoutes = (routes) => {
            expect(routes.length).toEqual(2);
            expect(routes[0].root.description).toEqual('Allows creating Foo item');
            expect(routes[0].root.tags).toEqual(['foo']);
            expect(routes[0].root.operationId).toEqual('FooController_create2');
            expect(routes[0].root.parameters.length).toEqual(0);
            expect(routes[0].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/xml': {
                        schema: {
                            $ref: '#/components/schemas/CreateFoo'
                        }
                    }
                }
            });
            expect(routes[0].responses['201'].description).toEqual('Newly created Foo object');
            expect(routes[0].responses['201'].content['application/json']).toEqual({
                schema: {
                    type: 'object',
                    additionalProperties: {
                        type: 'integer',
                        format: 'int32'
                    }
                }
            });
            expect(routes[1].root.path).toEqual('/globalPrefix/v2/modulePath/foos/{objectId}');
            expect(routes[1].root.operationId).toEqual('FooController_find2');
            expect(routes[1].root.parameters.length).toEqual(2);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'integer',
                        format: 'int64',
                        maximum: 10,
                        minimum: 0
                    }
                }
            ]);
            expect(routes[1].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            type: 'array',
                            items: {
                                type: 'string',
                                default: 'available',
                                enum: ['available', 'pending', 'sold']
                            }
                        }
                    }
                }
            });
            expect(routes[1].responses['200'].description).toEqual('');
            expect(routes[1].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
        };
    });
    describe('when enum is used', () => {
        let ParamEnum;
        (function (ParamEnum) {
            ParamEnum["A"] = "a";
            ParamEnum["B"] = "b";
            ParamEnum["C"] = "c";
        })(ParamEnum || (ParamEnum = {}));
        let QueryEnum;
        (function (QueryEnum) {
            QueryEnum[QueryEnum["D"] = 1] = "D";
            QueryEnum[QueryEnum["E"] = 2] = "E";
            QueryEnum[QueryEnum["F"] = (() => 3)()] = "F";
        })(QueryEnum || (QueryEnum = {}));
        class Foo {
        }
        let FooController = class FooController {
            find(objectId) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({
                name: 'objectId',
                enum: ParamEnum
            }),
            (0, decorators_1.ApiQuery)({ name: 'order', enum: QueryEnum }),
            (0, decorators_1.ApiQuery)({ name: 'page', enum: ['d', 'e', 'f'], isArray: true }),
            __param(0, (0, common_1.Param)('objectId')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)({ path: '', version: '3' })
        ], FooController);
        let Foo2Controller = class Foo2Controller {
            find(objectId, order, page) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({
                name: 'objectId',
                enum: ParamEnum
            }),
            (0, decorators_1.ApiQuery)({ name: 'order', enum: QueryEnum }),
            (0, decorators_1.ApiQuery)({ name: 'page', enum: ['d', 'e', 'f'] }),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('order')),
            __param(2, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, String]),
            __metadata("design:returntype", Promise)
        ], Foo2Controller.prototype, "find", null);
        Foo2Controller = __decorate([
            (0, common_1.Controller)('')
        ], Foo2Controller);
        let BarController = class BarController {
            findBar(objectId, order, page) {
                return Promise.resolve(null);
            }
        };
        __decorate([
            (0, common_1.Get)('bars/:objectId'),
            (0, decorators_1.ApiParam)({
                name: 'objectId',
                enum: ParamEnum,
                enumName: 'ParamEnum'
            }),
            (0, decorators_1.ApiQuery)({ name: 'order', enum: QueryEnum, enumName: 'QueryEnum' }),
            (0, decorators_1.ApiQuery)({
                name: 'page',
                enum: QueryEnum,
                enumName: 'QueryEnum',
                isArray: true
            }),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('order')),
            __param(2, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, Number, Array]),
            __metadata("design:returntype", Promise)
        ], BarController.prototype, "findBar", null);
        BarController = __decorate([
            (0, common_1.Controller)('')
        ], BarController);
        let Bar2Controller = class Bar2Controller {
            findBar(objectId) {
                return Promise.resolve(null);
            }
        };
        __decorate([
            (0, common_1.Get)('bars/:objectId'),
            (0, decorators_1.ApiParam)({
                name: 'objectId',
                enum: [1, 2, 3],
                enumName: 'NumberEnum'
            }),
            __param(0, (0, common_1.Param)('objectId')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [Number]),
            __metadata("design:returntype", Promise)
        ], Bar2Controller.prototype, "findBar", null);
        Bar2Controller = __decorate([
            (0, common_1.Controller)('')
        ], Bar2Controller);
        it('should properly define enums', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const config = new core_1.ApplicationConfig();
            config.enableVersioning({
                type: common_1.VersioningType.URI
            });
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, config, 'modulePath', 'globalPrefix');
            expect(routes[0].root.path).toEqual('/globalPrefix/v3/modulePath/foos/{objectId}');
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string',
                        enum: ['a', 'b', 'c']
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        items: {
                            type: 'string',
                            enum: ['d', 'e', 'f']
                        },
                        type: 'array'
                    }
                },
                {
                    in: 'query',
                    name: 'order',
                    required: true,
                    schema: {
                        type: 'number',
                        enum: [1, 2, 3]
                    }
                }
            ]);
        });
        it('should properly define enum and not add isArray prop to params', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new Foo2Controller(),
                metatype: Foo2Controller
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string',
                        enum: ['a', 'b', 'c']
                    }
                },
                {
                    in: 'query',
                    name: 'order',
                    required: true,
                    schema: {
                        type: 'number',
                        enum: [1, 2, 3]
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string',
                        enum: ['d', 'e', 'f']
                    }
                }
            ]);
        });
        it('should properly define enum as schema with lazy function', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new BarController(),
                metatype: BarController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        $ref: '#/components/schemas/ParamEnum'
                    }
                },
                {
                    in: 'query',
                    name: 'order',
                    required: true,
                    schema: {
                        $ref: '#/components/schemas/QueryEnum'
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/QueryEnum'
                        }
                    }
                }
            ]);
        });
        it('should properly define number enum as schema', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const schema = explorer.getSchemas();
            const routes = explorer.exploreController({
                instance: new Bar2Controller(),
                metatype: Bar2Controller
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(schema.NumberEnum).toEqual({ type: 'number', enum: [1, 2, 3] });
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        $ref: '#/components/schemas/NumberEnum'
                    }
                }
            ]);
        });
    });
    describe('when headers are defined', () => {
        class Foo {
        }
        let FooController = class FooController {
            find() {
                return Promise.resolve([]);
            }
            create() {
                return Promise.resolve();
            }
        };
        __decorate([
            (0, decorators_1.ApiHeader)({
                name: 'X-Rate-Limit',
                description: 'calls per hour allowed by the user'
            }),
            (0, common_1.Get)('foos/:objectId'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        __decorate([
            (0, common_1.Post)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        FooController = __decorate([
            (0, decorators_1.ApiHeader)({
                name: 'Authorization',
                description: 'auth token',
                schema: {
                    default: 'default token'
                }
            }),
            (0, common_1.Controller)('')
        ], FooController);
        it('should properly define headers', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(routes[0].root.parameters).toEqual([
                {
                    description: 'auth token',
                    name: 'Authorization',
                    in: 'header',
                    schema: {
                        default: 'default token',
                        type: 'string'
                    }
                },
                {
                    description: 'calls per hour allowed by the user',
                    name: 'X-Rate-Limit',
                    in: 'header',
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[1].root.parameters).toEqual([
                {
                    description: 'auth token',
                    name: 'Authorization',
                    in: 'header',
                    schema: {
                        default: 'default token',
                        type: 'string'
                    }
                }
            ]);
        });
    });
    describe('should include extra models', () => {
        class ExtraModel {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ExtraModel.prototype, "p1", void 0);
        class ExtraModel2 {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ExtraModel2.prototype, "p2", void 0);
        it('when multiple decorators is used on controller', () => {
            let FooController = class FooController {
                find() {
                    return true;
                }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], FooController.prototype, "find", null);
            FooController = __decorate([
                (0, common_1.Controller)(),
                (0, decorators_1.ApiExtraModels)(ExtraModel),
                (0, decorators_1.ApiExtraModels)(ExtraModel2)
            ], FooController);
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            const schemas = explorer.getSchemas();
            expect(schemas.ExtraModel2).toBeDefined();
            expect(schemas.ExtraModel).toBeDefined();
        });
        it('when multiple decorators is used on controller`s method', () => {
            let FooController = class FooController {
                find() {
                    return true;
                }
            };
            __decorate([
                (0, common_1.Get)(),
                (0, decorators_1.ApiExtraModels)(ExtraModel),
                (0, decorators_1.ApiExtraModels)(ExtraModel2),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], FooController.prototype, "find", null);
            FooController = __decorate([
                (0, common_1.Controller)()
            ], FooController);
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            const schemas = explorer.getSchemas();
            expect(schemas.ExtraModel2).toBeDefined();
            expect(schemas.ExtraModel).toBeDefined();
        });
    });
    describe('when a controller is excluded', () => {
        class Foo {
        }
        let FooController = class FooController {
            find() {
                return Promise.resolve([]);
            }
            create() {
                return Promise.resolve();
            }
        };
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        __decorate([
            (0, common_1.Post)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        FooController = __decorate([
            (0, decorators_1.ApiExcludeController)(),
            (0, common_1.Controller)('')
        ], FooController);
        it('should correctly define controller exclusion', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes).toHaveLength(0);
        });
    });
    describe('when defaultVersion is defined', () => {
        let explorer;
        let config;
        describe('and controller/route versions are defined', () => {
            const CONTROLLER_VERSION = '1';
            const METHOD_VERSION = '2';
            const CONTROLLER_MULTIPLE_VERSIONS = ['3', '4'];
            const CONTROLLER_MULTIPLE_VERSIONS_NEUTRAL = [
                '5',
                interfaces_1.VERSION_NEUTRAL
            ];
            let WithVersionController = class WithVersionController {
                foo() { }
                bar() { }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithVersionController.prototype, "foo", null);
            __decorate([
                (0, common_1.Version)(METHOD_VERSION),
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithVersionController.prototype, "bar", null);
            WithVersionController = __decorate([
                (0, common_1.Controller)({ path: 'with-version', version: CONTROLLER_VERSION })
            ], WithVersionController);
            let WithMultipleVersionsController = class WithMultipleVersionsController {
                foo() { }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithMultipleVersionsController.prototype, "foo", null);
            WithMultipleVersionsController = __decorate([
                (0, common_1.Controller)({
                    path: 'with-multiple-version',
                    version: CONTROLLER_MULTIPLE_VERSIONS
                })
            ], WithMultipleVersionsController);
            let WithMultipleVersionsNeutralController = class WithMultipleVersionsNeutralController {
                foo() { }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithMultipleVersionsNeutralController.prototype, "foo", null);
            WithMultipleVersionsNeutralController = __decorate([
                (0, common_1.Controller)({
                    path: 'with-multiple-version-neutral',
                    version: CONTROLLER_MULTIPLE_VERSIONS_NEUTRAL
                })
            ], WithMultipleVersionsNeutralController);
            beforeAll(() => {
                explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
                config = new core_1.ApplicationConfig();
                config.enableVersioning({
                    type: common_1.VersioningType.URI,
                    defaultVersion: 'THIS_SHOULD_NOT_APPEAR_ANYWHERE'
                });
            });
            describe('and using the default operationIdFactory', () => {
                it('should use controller version defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithVersionController(),
                        metatype: WithVersionController
                    }, config, 'modulePath', 'globalPrefix');
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_VERSION}/modulePath/with-version`);
                    expect(routes[0].root.operationId).toEqual(`WithVersionController_foo_v1`);
                });
                it('should use route version defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithVersionController(),
                        metatype: WithVersionController
                    }, config, 'modulePath', 'globalPrefix');
                    expect(routes[1].root.path).toEqual(`/globalPrefix/v${METHOD_VERSION}/modulePath/with-version`);
                    expect(routes[1].root.operationId).toEqual(`WithVersionController_bar_v2`);
                });
                it('should use multiple versions defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithMultipleVersionsController(),
                        metatype: WithMultipleVersionsController
                    }, config, 'modulePath', 'globalPrefix');
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[0]}/modulePath/with-multiple-version`);
                    expect(routes[0].root.operationId).toEqual(`WithMultipleVersionsController_foo_v3`);
                    expect(routes[1].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[1]}/modulePath/with-multiple-version`);
                    expect(routes[1].root.operationId).toEqual(`WithMultipleVersionsController_foo_v4`);
                });
                it('should use multiple versions with neutral defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithMultipleVersionsNeutralController(),
                        metatype: WithMultipleVersionsNeutralController
                    }, config, 'modulePath', 'globalPrefix');
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS_NEUTRAL[0]}/modulePath/with-multiple-version-neutral`);
                    expect(routes[0].root.operationId).toEqual(`WithMultipleVersionsNeutralController_foo[0]_v5`);
                    expect(routes[1].root.path).toEqual(`/globalPrefix/modulePath/with-multiple-version-neutral`);
                    expect(routes[1].root.operationId).toEqual(`WithMultipleVersionsNeutralController_foo[1]`);
                });
            });
            describe('and has an operationIdFactory that uses the method version', () => {
                it('should use controller version defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithVersionController(),
                        metatype: WithVersionController
                    }, config, 'modulePath', 'globalPrefix', controllerKeyMethodKeyVersionKeyOperationIdFactory);
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_VERSION}/modulePath/with-version`);
                    expect(routes[0].root.operationId).toEqual(`WithVersionController.foo.v${CONTROLLER_VERSION}`);
                });
                it('should use route version defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithVersionController(),
                        metatype: WithVersionController
                    }, config, 'modulePath', 'globalPrefix', controllerKeyMethodKeyVersionKeyOperationIdFactory);
                    expect(routes[1].root.path).toEqual(`/globalPrefix/v${METHOD_VERSION}/modulePath/with-version`);
                    expect(routes[1].root.operationId).toEqual(`WithVersionController.bar.v${METHOD_VERSION}`);
                });
                it('should use multiple versions defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithMultipleVersionsController(),
                        metatype: WithMultipleVersionsController
                    }, config, 'modulePath', 'globalPrefix', controllerKeyMethodKeyVersionKeyOperationIdFactory);
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[0]}/modulePath/with-multiple-version`);
                    expect(routes[0].root.operationId).toEqual(`WithMultipleVersionsController.foo.v${CONTROLLER_MULTIPLE_VERSIONS[0]}`);
                    expect(routes[1].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[1]}/modulePath/with-multiple-version`);
                    expect(routes[1].root.operationId).toEqual(`WithMultipleVersionsController.foo.v${CONTROLLER_MULTIPLE_VERSIONS[1]}`);
                });
                it('should use multiple versions with neutral defined', () => {
                    const routes = explorer.exploreController({
                        instance: new WithMultipleVersionsNeutralController(),
                        metatype: WithMultipleVersionsNeutralController
                    }, config, 'modulePath', 'globalPrefix', controllerKeyMethodKeyVersionKeyOperationIdFactory);
                    expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS_NEUTRAL[0]}/modulePath/with-multiple-version-neutral`);
                    expect(routes[0].root.operationId).toEqual(`WithMultipleVersionsNeutralController.foo[0].v${CONTROLLER_MULTIPLE_VERSIONS_NEUTRAL[0]}`);
                    expect(routes[1].root.path).toEqual(`/globalPrefix/modulePath/with-multiple-version-neutral`);
                    expect(routes[1].root.operationId).toEqual(`WithMultipleVersionsNeutralController.foo[1]`);
                });
            });
            it('should use controller version defined', () => {
                const routes = explorer.exploreController({
                    instance: new WithVersionController(),
                    metatype: WithVersionController
                }, config, 'modulePath', 'globalPrefix');
                expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_VERSION}/modulePath/with-version`);
            });
            it('should use route version defined', () => {
                const routes = explorer.exploreController({
                    instance: new WithVersionController(),
                    metatype: WithVersionController
                }, config, 'modulePath', 'globalPrefix');
                expect(routes[1].root.path).toEqual(`/globalPrefix/v${METHOD_VERSION}/modulePath/with-version`);
            });
            it('should use multiple versions defined', () => {
                const routes = explorer.exploreController({
                    instance: new WithMultipleVersionsController(),
                    metatype: WithMultipleVersionsController
                }, config, 'modulePath', 'globalPrefix');
                expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[0]}/modulePath/with-multiple-version`);
                expect(routes[1].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[1]}/modulePath/with-multiple-version`);
            });
        });
        describe('and controller/route versions are not defined', () => {
            const DEFAULT_VERSION = '1';
            let WithoutVersionsController = class WithoutVersionsController {
                foo() { }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithoutVersionsController.prototype, "foo", null);
            WithoutVersionsController = __decorate([
                (0, common_1.Controller)('with-multiple-version')
            ], WithoutVersionsController);
            it('should use the global default version ', () => {
                const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
                const config = new core_1.ApplicationConfig();
                config.enableVersioning({
                    type: common_1.VersioningType.URI,
                    defaultVersion: DEFAULT_VERSION
                });
                const routes = explorer.exploreController({
                    instance: new WithoutVersionsController(),
                    metatype: WithoutVersionsController
                }, config, 'modulePath', 'globalPrefix');
                expect(routes[0].root.path).toEqual(`/globalPrefix/v${DEFAULT_VERSION}/modulePath/with-multiple-version`);
            });
        });
    });
    describe('when multiple versions are defined', () => {
        let explorer;
        let config;
        describe('and controller versions are defined', () => {
            const CONTROLLER_MULTIPLE_VERSIONS = ['2', interfaces_1.VERSION_NEUTRAL];
            class BarBodyDto {
            }
            let WithMultipleVersionsController = class WithMultipleVersionsController {
                foo() { }
                bar(body) {
                    return body;
                }
            };
            __decorate([
                (0, common_1.Get)(),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", []),
                __metadata("design:returntype", void 0)
            ], WithMultipleVersionsController.prototype, "foo", null);
            __decorate([
                (0, common_1.Post)(),
                __param(0, (0, common_1.Body)()),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [BarBodyDto]),
                __metadata("design:returntype", BarBodyDto)
            ], WithMultipleVersionsController.prototype, "bar", null);
            WithMultipleVersionsController = __decorate([
                (0, common_1.Controller)({
                    path: 'with-multiple-version',
                    version: CONTROLLER_MULTIPLE_VERSIONS
                })
            ], WithMultipleVersionsController);
            beforeAll(() => {
                explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
                config = new core_1.ApplicationConfig();
                config.enableVersioning({
                    type: common_1.VersioningType.URI,
                    defaultVersion: interfaces_1.VERSION_NEUTRAL
                });
            });
            it('should use multiple versions', () => {
                const routes = explorer.exploreController({
                    instance: new WithMultipleVersionsController(),
                    metatype: WithMultipleVersionsController
                }, config, 'modulePath', 'globalPrefix');
                expect(routes[0].root.path).toEqual(`/globalPrefix/v${CONTROLLER_MULTIPLE_VERSIONS[0]}/modulePath/with-multiple-version`);
                expect(routes[1].root.path).toEqual(`/globalPrefix/modulePath/with-multiple-version`);
            });
            it('should have the requestBody in each version of POST route', () => {
                const routes = explorer.exploreController({
                    instance: new WithMultipleVersionsController(),
                    metatype: WithMultipleVersionsController
                }, config, 'modulePath', 'globalPrefix');
                const postRoutes = routes.filter((route) => route.root?.method === 'post');
                expect(postRoutes[0].root.requestBody).toBeDefined();
                expect(postRoutes[1].root.requestBody).toBeDefined();
            });
        });
    });
    describe('when @All(...) is used', () => {
        let AllController = class AllController {
            all() {
                return Promise.resolve();
            }
        };
        __decorate([
            (0, common_1.All)('*'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], AllController.prototype, "all", null);
        AllController = __decorate([
            (0, common_1.Controller)('')
        ], AllController);
        it('should create route for every method', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new AllController(),
                metatype: AllController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(routes.length).toEqual(8);
            expect([
                'get',
                'post',
                'put',
                'delete',
                'patch',
                'options',
                'head',
                'search'
            ].every((method) => routes.find((route) => route.root.method === method))).toBe(true);
            expect(routes.find((route) => route.root.method === 'all')).toBe(undefined);
            expect(routes.filter((v, i, a) => a.findIndex((v2) => ['path', 'parameter'].every((k) => v2[k] === v[k])) === i).length).toEqual(1);
        });
    });
    describe('when custom schema names are used', () => {
        let FooDto = class FooDto {
        };
        FooDto = __decorate([
            (0, decorators_1.ApiSchema)({
                name: 'Foo'
            })
        ], FooDto);
        let CreateFooDto = class CreateFooDto {
        };
        CreateFooDto = __decorate([
            (0, decorators_1.ApiSchema)({
                name: 'CreateFoo'
            })
        ], CreateFooDto);
        let FooController = class FooController {
            create(createFoo) {
                return Promise.resolve({});
            }
            find(objectId, q) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Post)('foos'),
            (0, decorators_1.ApiBody)({ type: CreateFooDto }),
            (0, decorators_1.ApiOperation)({ summary: 'Create foo' }),
            (0, decorators_1.ApiCreatedResponse)({
                type: FooDto,
                description: 'Newly created Foo object'
            }),
            __param(0, (0, common_1.Body)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [CreateFooDto]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        __decorate([
            (0, common_1.Get)('foos/:objectId'),
            (0, decorators_1.ApiParam)({ name: 'objectId', type: 'string' }),
            (0, decorators_1.ApiQuery)({ name: 'page', type: 'string' }),
            (0, decorators_1.ApiOperation)({ summary: 'List all Foos' }),
            (0, decorators_1.ApiOkResponse)({ type: [FooDto] }),
            (0, decorators_1.ApiDefaultResponse)({ type: [FooDto] }),
            __param(0, (0, common_1.Param)('objectId')),
            __param(1, (0, common_1.Query)('page')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String, String]),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)('')
        ], FooController);
        it('sees two controller operations and their responses', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes.length).toEqual(2);
            expect(routes[0].root.operationId).toEqual('FooController_create');
            expect(routes[0].root.method).toEqual('post');
            expect(routes[0].root.path).toEqual('/path/foos');
            expect(routes[0].root.summary).toEqual('Create foo');
            expect(routes[0].root.parameters.length).toEqual(0);
            expect(routes[0].root.requestBody).toEqual({
                required: true,
                content: {
                    'application/json': {
                        schema: {
                            $ref: '#/components/schemas/CreateFoo'
                        }
                    }
                }
            });
            expect(routes[0].responses['201'].description).toEqual('Newly created Foo object');
            expect(routes[0].responses['201'].content['application/json']).toEqual({
                schema: {
                    $ref: '#/components/schemas/Foo'
                }
            });
            expect(routes[1].root.operationId).toEqual('FooController_find');
            expect(routes[1].root.method).toEqual('get');
            expect(routes[1].root.path).toEqual('/path/foos/{objectId}');
            expect(routes[1].root.summary).toEqual('List all Foos');
            expect(routes[1].root.parameters.length).toEqual(2);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                },
                {
                    in: 'query',
                    name: 'page',
                    required: true,
                    schema: {
                        type: 'string'
                    }
                }
            ]);
            expect(routes[1].responses['200'].description).toEqual('');
            expect(routes[1].responses['200'].content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
            expect(routes[1].responses.default.content['application/json']).toEqual({
                schema: {
                    type: 'array',
                    items: {
                        $ref: '#/components/schemas/Foo'
                    }
                }
            });
        });
    });
    describe('when global parameters are defined', () => {
        class Foo {
        }
        let FooController = class FooController {
            find() {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, common_1.Get)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        FooController = __decorate([
            (0, common_1.Controller)('')
        ], FooController);
        it('should properly define global parameters', () => {
            global_parameters_storage_1.GlobalParametersStorage.add({
                name: 'x-tenant-id',
                in: 'header',
                schema: { type: 'string' }
            }, {
                name: 'x-tenant-id-2',
                in: 'header',
                schema: { type: 'string' }
            });
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'modulePath', 'globalPrefix');
            expect(routes[0].root.parameters).toEqual([
                {
                    name: 'x-tenant-id',
                    in: 'header',
                    schema: { type: 'string' }
                },
                {
                    name: 'x-tenant-id-2',
                    in: 'header',
                    schema: { type: 'string' }
                }
            ]);
            global_parameters_storage_1.GlobalParametersStorage.clear();
        });
    });
    describe('when links are defined', () => {
        class Human {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], Human.prototype, "id", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                link: () => Human,
                example: ['a33d0f4b-aec2-4b07-b407-45d8e70332b2']
            }),
            (0, decorators_1.ApiPropertyOptional)(),
            __metadata("design:type", String)
        ], Human.prototype, "spouseId", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                link: () => Human,
                example: [
                    '5593519b-b830-4c5a-b5f6-3cbbfbecbd1b',
                    '8044bf32-5485-42c4-b481-d6ef1ae89163'
                ]
            }),
            __metadata("design:type", Array)
        ], Human.prototype, "parentIds", void 0);
        let HumanController = class HumanController {
            getHuman(id) {
                const human = new Human();
                human.id = id;
                return Promise.resolve(human);
            }
            getChildren(id) {
                return Promise.resolve([]);
            }
        };
        __decorate([
            (0, decorators_1.ApiDefaultGetter)(Human, 'id'),
            (0, common_1.Get)(':id'),
            (0, decorators_1.ApiOkResponse)({
                type: Human,
                description: 'Human corresponding to `id`'
            }),
            __param(0, (0, common_1.Param)('id')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", Promise)
        ], HumanController.prototype, "getHuman", null);
        __decorate([
            (0, common_1.Get)(':id/children'),
            (0, decorators_1.ApiLink)({ from: Human, routeParam: 'id' }),
            (0, decorators_1.ApiOkResponse)({
                type: [Human],
                description: 'Children of human with id `id`'
            }),
            __param(0, (0, common_1.Param)('id')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", Promise)
        ], HumanController.prototype, "getChildren", null);
        HumanController = __decorate([
            (0, common_1.Controller)('')
        ], HumanController);
        it('should generate open api link objects', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new HumanController(),
                metatype: HumanController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes[0].responses['200'].links).toEqual({
                HumanController_getHuman_from_spouseId: {
                    operationId: 'HumanController_getHuman',
                    parameters: {
                        id: '$response.body#/spouseId'
                    }
                },
                HumanController_getHuman_from_parentIds: {
                    operationId: 'HumanController_getHuman',
                    parameters: {
                        id: '$response.body#/parentIds'
                    }
                },
                HumanController_getChildren_from_id: {
                    operationId: 'HumanController_getChildren',
                    parameters: {
                        id: '$response.body#/id'
                    }
                }
            });
            expect(routes[1].responses['200'].links).toEqual(routes[0].responses['200'].links);
        });
        it('should generate open api link objects with custom linkNameFactory', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new HumanController(),
                metatype: HumanController
            }, new core_1.ApplicationConfig(), 'path', undefined, undefined, (controllerKey, methodKey, paramKey) => paramKey === 'id'
                ? methodKey.replace(/^get/, '')
                : (0, lodash_1.upperFirst)(paramKey.replace(/Id(s)?$/, '$1')));
            expect(routes[0].responses['200'].links).toEqual({
                Spouse: {
                    operationId: 'HumanController_getHuman',
                    parameters: {
                        id: '$response.body#/spouseId'
                    }
                },
                Parents: {
                    operationId: 'HumanController_getHuman',
                    parameters: {
                        id: '$response.body#/parentIds'
                    }
                },
                Children: {
                    operationId: 'HumanController_getChildren',
                    parameters: {
                        id: '$response.body#/id'
                    }
                }
            });
        });
    });
    describe('when params are defined', () => {
        class Foo {
        }
        let FooController = class FooController {
            find() {
                return Promise.resolve([]);
            }
            create() {
                return Promise.resolve();
            }
        };
        __decorate([
            (0, decorators_1.ApiParam)({ name: 'objectId', type: 'number' }),
            (0, common_1.Get)('foos/:objectId'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        __decorate([
            (0, common_1.Post)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        FooController = __decorate([
            (0, decorators_1.ApiParam)({ name: 'parentId', type: 'number' }),
            (0, common_1.Controller)(':parentId')
        ], FooController);
        it('should properly define params', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                },
                {
                    in: 'path',
                    name: 'parentId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                }
            ]);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'path',
                    name: 'parentId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                }
            ]);
        });
    });
    describe('when queries are defined', () => {
        class Foo {
        }
        let FooController = class FooController {
            find() {
                return Promise.resolve([]);
            }
            create() {
                return Promise.resolve();
            }
        };
        __decorate([
            (0, decorators_1.ApiQuery)({ name: 'objectId', type: 'number' }),
            (0, common_1.Get)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "find", null);
        __decorate([
            (0, common_1.Post)('foos'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", Promise)
        ], FooController.prototype, "create", null);
        FooController = __decorate([
            (0, decorators_1.ApiQuery)({ name: 'parentId', type: 'number' }),
            (0, common_1.Controller)('')
        ], FooController);
        it('should properly define params', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes[0].root.parameters).toEqual([
                {
                    in: 'query',
                    name: 'objectId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                },
                {
                    in: 'query',
                    name: 'parentId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                }
            ]);
            expect(routes[1].root.parameters).toEqual([
                {
                    in: 'query',
                    name: 'parentId',
                    required: true,
                    schema: {
                        type: 'number'
                    }
                }
            ]);
        });
    });
    describe('when arrays are used', () => {
        let LettersEnum;
        (function (LettersEnum) {
            LettersEnum["A"] = "A";
            LettersEnum["B"] = "B";
            LettersEnum["C"] = "C";
        })(LettersEnum || (LettersEnum = {}));
        class NestedDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], NestedDto.prototype, "nestedString", void 0);
        class ObjectDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], ObjectDto.prototype, "field", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", NestedDto)
        ], ObjectDto.prototype, "nestedObject", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                isArray: true,
                type: NestedDto
            }),
            __metadata("design:type", Array)
        ], ObjectDto.prototype, "nestedArrayOfObjects", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                type: [NestedDto]
            }),
            __metadata("design:type", Array)
        ], ObjectDto.prototype, "nestedArrayOfObjects2", void 0);
        class FooDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)({
                isArray: true,
                type: ObjectDto
            }),
            __metadata("design:type", Array)
        ], FooDto.prototype, "arrayOfObjectsDto", void 0);
        class FooController {
            route1(fooDto) { }
            route2(objectDto) { }
        }
        __decorate([
            (0, common_1.Get)('/route1'),
            __param(0, (0, common_1.Query)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [FooDto]),
            __metadata("design:returntype", void 0)
        ], FooController.prototype, "route1", null);
        __decorate([
            (0, common_1.Get)('/route2'),
            __param(0, (0, common_1.Query)()),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [ObjectDto]),
            __metadata("design:returntype", void 0)
        ], FooController.prototype, "route2", null);
        it('should properly define arrays in query', () => {
            const explorer = new swagger_explorer_1.SwaggerExplorer(schemaObjectFactory);
            const routes = explorer.exploreController({
                instance: new FooController(),
                metatype: FooController
            }, new core_1.ApplicationConfig(), 'path');
            expect(routes[0].root.parameters).toEqual([
                {
                    name: 'arrayOfObjectsDto',
                    required: true,
                    in: 'query',
                    schema: {
                        items: {
                            $ref: '#/components/schemas/ObjectDto'
                        },
                        type: 'array'
                    }
                }
            ]);
            expect(routes[1].root.parameters).toEqual([
                {
                    name: 'field',
                    required: true,
                    in: 'query',
                    schema: {
                        type: 'string'
                    }
                },
                {
                    name: 'nestedObject',
                    required: true,
                    in: 'query',
                    schema: {
                        $ref: '#/components/schemas/NestedDto'
                    }
                },
                {
                    name: 'nestedArrayOfObjects',
                    required: true,
                    in: 'query',
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/NestedDto'
                        }
                    }
                },
                {
                    name: 'nestedArrayOfObjects2',
                    required: true,
                    in: 'query',
                    schema: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/NestedDto'
                        }
                    }
                }
            ]);
        });
    });
});
