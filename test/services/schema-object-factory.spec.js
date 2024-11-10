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
const decorators_1 = require("../../lib/decorators");
const model_properties_accessor_1 = require("../../lib/services/model-properties-accessor");
const schema_object_factory_1 = require("../../lib/services/schema-object-factory");
const swagger_types_mapper_1 = require("../../lib/services/swagger-types-mapper");
const create_user_dto_1 = require("./fixtures/create-user.dto");
describe('SchemaObjectFactory', () => {
    let modelPropertiesAccessor;
    let swaggerTypesMapper;
    let schemaObjectFactory;
    beforeEach(() => {
        modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
        swaggerTypesMapper = new swagger_types_mapper_1.SwaggerTypesMapper();
        schemaObjectFactory = new schema_object_factory_1.SchemaObjectFactory(modelPropertiesAccessor, swaggerTypesMapper);
    });
    describe('exploreModelSchema', () => {
        let Role;
        (function (Role) {
            Role["Admin"] = "admin";
            Role["User"] = "user";
        })(Role || (Role = {}));
        let Group;
        (function (Group) {
            Group["User"] = "user";
            Group["Guest"] = "guest";
            Group["Family"] = "family";
            Group["Neighboard"] = "neighboard";
        })(Group || (Group = {}));
        let Ranking;
        (function (Ranking) {
            Ranking[Ranking["First"] = 1] = "First";
            Ranking[Ranking["Second"] = 2] = "Second";
            Ranking[Ranking["Third"] = 3] = "Third";
        })(Ranking || (Ranking = {}));
        let HairColour;
        (function (HairColour) {
            HairColour["Brown"] = "Brown";
            HairColour["Blond"] = "Blond";
            HairColour["Ginger"] = "Ginger";
        })(HairColour || (HairColour = {}));
        class CreatePersonDto {
        }
        __decorate([
            (0, decorators_1.ApiProperty)(),
            __metadata("design:type", String)
        ], CreatePersonDto.prototype, "name", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: Role, enumName: 'Role' }),
            __metadata("design:type", String)
        ], CreatePersonDto.prototype, "role", void 0);
        class Person {
        }
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: Role, enumName: 'Role' }),
            __metadata("design:type", String)
        ], Person.prototype, "role", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: Role, enumName: 'Role', isArray: true }),
            __metadata("design:type", Array)
        ], Person.prototype, "roles", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: Group, enumName: 'Group', isArray: true }),
            __metadata("design:type", Array)
        ], Person.prototype, "groups", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: Ranking, enumName: 'Ranking', isArray: true }),
            __metadata("design:type", Array)
        ], Person.prototype, "rankings", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({ enum: () => HairColour, enumName: 'HairColour' }),
            __metadata("design:type", String)
        ], Person.prototype, "hairColour", void 0);
        __decorate([
            (0, decorators_1.ApiProperty)({
                enum: () => ['Pizza', 'Burger', 'Salad'],
                enumName: 'Food',
                isArray: true
            }),
            __metadata("design:type", Array)
        ], Person.prototype, "favouriteFoods", void 0);
        it('should explore enum', () => {
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(Person, schemas);
            expect(Object.keys(schemas)).toHaveLength(6);
            expect(schemas).toHaveProperty('Role');
            expect(schemas.Role).toEqual({
                type: 'string',
                enum: ['admin', 'user']
            });
            expect(schemas.Group).toEqual({
                type: 'string',
                enum: ['user', 'guest', 'family', 'neighboard']
            });
            expect(schemas.Ranking).toEqual({
                type: 'number',
                enum: [1, 2, 3]
            });
            expect(schemas.HairColour).toEqual({
                type: 'string',
                enum: ['Brown', 'Blond', 'Ginger']
            });
            expect(schemas).toHaveProperty('Person');
            expect(schemas.Person).toEqual({
                type: 'object',
                properties: {
                    role: {
                        allOf: [
                            {
                                $ref: '#/components/schemas/Role'
                            }
                        ]
                    },
                    roles: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Role'
                        }
                    },
                    groups: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Group'
                        }
                    },
                    rankings: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/Ranking'
                        }
                    },
                    favouriteFoods: {
                        items: {
                            $ref: '#/components/schemas/Food'
                        },
                        type: 'array'
                    },
                    hairColour: {
                        allOf: [
                            {
                                $ref: '#/components/schemas/HairColour'
                            }
                        ]
                    }
                },
                required: [
                    'role',
                    'roles',
                    'groups',
                    'rankings',
                    'hairColour',
                    'favouriteFoods'
                ]
            });
            schemaObjectFactory.exploreModelSchema(CreatePersonDto, schemas);
            expect(Object.keys(schemas)).toHaveLength(7);
            expect(schemas).toHaveProperty('CreatePersonDto');
            expect(schemas.CreatePersonDto).toEqual({
                type: 'object',
                properties: {
                    name: {
                        type: 'string'
                    },
                    role: {
                        allOf: [
                            {
                                $ref: '#/components/schemas/Role'
                            }
                        ]
                    }
                },
                required: ['name', 'role']
            });
        });
        it('should create openapi schema', () => {
            const schemas = {};
            const schemaKey = schemaObjectFactory.exploreModelSchema(create_user_dto_1.CreateUserDto, schemas);
            expect(schemas[schemaKey]).toEqual({
                type: 'object',
                properties: {
                    login: {
                        type: 'string'
                    },
                    password: {
                        type: 'string',
                        example: 'password123'
                    },
                    houses: {
                        items: {
                            $ref: '#/components/schemas/House'
                        },
                        type: 'array'
                    },
                    age: {
                        type: 'number',
                        format: 'int64',
                        example: 10
                    },
                    amount: {
                        type: 'integer',
                        format: 'int64'
                    },
                    createdAt: {
                        format: 'date-time',
                        type: 'string'
                    },
                    custom: {
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
                    },
                    profile: {
                        description: 'Profile',
                        nullable: true,
                        allOf: [
                            {
                                $ref: '#/components/schemas/CreateProfileDto'
                            }
                        ]
                    },
                    tags: {
                        items: {
                            type: 'string'
                        },
                        type: 'array'
                    },
                    twoDimensionPrimitives: {
                        items: {
                            type: 'array',
                            items: {
                                type: 'string'
                            }
                        },
                        type: 'array'
                    },
                    twoDimensionModels: {
                        items: {
                            type: 'array',
                            items: {
                                $ref: '#/components/schemas/CreateProfileDto'
                            }
                        },
                        type: 'array'
                    },
                    urls: {
                        items: {
                            format: 'uri',
                            type: 'string'
                        },
                        type: 'array'
                    },
                    luckyNumbers: {
                        type: 'array',
                        items: {
                            type: 'integer'
                        }
                    },
                    options: {
                        items: {
                            properties: {
                                isReadonly: {
                                    type: 'string'
                                }
                            },
                            type: 'object'
                        },
                        type: 'array'
                    },
                    allOf: {
                        oneOf: [
                            { $ref: '#/components/schemas/Cat' },
                            { $ref: '#/components/schemas/Dog' }
                        ],
                        discriminator: { propertyName: 'pet_type' }
                    },
                    formatArray: {
                        type: 'array',
                        items: {
                            type: 'string',
                            format: 'uuid'
                        }
                    }
                },
                required: [
                    'login',
                    'password',
                    'profile',
                    'tags',
                    'twoDimensionPrimitives',
                    'twoDimensionModels',
                    'urls',
                    'luckyNumbers',
                    'options',
                    'allOf',
                    'houses',
                    'createdAt',
                    'amount',
                    'formatArray'
                ]
            });
            expect(schemas['CreateProfileDto']).toEqual({
                type: 'object',
                properties: {
                    firstname: {
                        type: 'string'
                    },
                    lastname: {
                        type: 'string'
                    },
                    parent: {
                        $ref: '#/components/schemas/CreateUserDto'
                    }
                },
                required: ['firstname', 'lastname', 'parent']
            });
        });
        it('should purge linked types from properties', () => {
            class Human {
            }
            __decorate([
                (0, decorators_1.ApiProperty)(),
                __metadata("design:type", String)
            ], Human.prototype, "id", void 0);
            __decorate([
                (0, decorators_1.ApiProperty)({ link: () => Human }),
                __metadata("design:type", String)
            ], Human.prototype, "spouseId", void 0);
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(Human, schemas);
            expect(schemas[Human.name]).toEqual({
                type: 'object',
                properties: {
                    id: {
                        type: 'string'
                    },
                    spouseId: {
                        type: 'string'
                    }
                },
                required: ['id', 'spouseId']
            });
        });
        it('should override base class metadata', () => {
            class CreatUserDto {
            }
            __decorate([
                (0, decorators_1.ApiProperty)({ minLength: 0, required: true }),
                __metadata("design:type", String)
            ], CreatUserDto.prototype, "name", void 0);
            class UpdateUserDto extends CreatUserDto {
            }
            __decorate([
                (0, decorators_1.ApiProperty)({ minLength: 1, required: false }),
                __metadata("design:type", String)
            ], UpdateUserDto.prototype, "name", void 0);
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(CreatUserDto, schemas);
            schemaObjectFactory.exploreModelSchema(UpdateUserDto, schemas);
            expect(schemas[CreatUserDto.name]).toEqual({
                type: 'object',
                properties: { name: { type: 'string', minLength: 0 } },
                required: ['name']
            });
            expect(schemas[UpdateUserDto.name]).toEqual({
                type: 'object',
                properties: { name: { type: 'string', minLength: 1 } }
            });
        });
        it('should use schema name instead of class name', () => {
            let CreateUserDto = class CreateUserDto {
            };
            CreateUserDto = __decorate([
                (0, decorators_1.ApiSchema)({
                    name: 'CreateUser'
                })
            ], CreateUserDto);
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(CreateUserDto, schemas);
            expect(Object.keys(schemas)).toContain('CreateUser');
        });
        it('should not use schema name of base class', () => {
            let CreateUserDto = class CreateUserDto {
            };
            CreateUserDto = __decorate([
                (0, decorators_1.ApiSchema)({
                    name: 'CreateUser'
                })
            ], CreateUserDto);
            class UpdateUserDto extends CreateUserDto {
            }
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(UpdateUserDto, schemas);
            expect(Object.keys(schemas)).toContain('UpdateUserDto');
        });
        it('should include extension properties', () => {
            let CreatUserDto = class CreatUserDto {
            };
            __decorate([
                (0, decorators_1.ApiProperty)({ minLength: 0, required: true }),
                __metadata("design:type", String)
            ], CreatUserDto.prototype, "name", void 0);
            CreatUserDto = __decorate([
                (0, decorators_1.ApiExtension)('x-test', 'value')
            ], CreatUserDto);
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(CreatUserDto, schemas);
            expect(schemas[CreatUserDto.name]['x-test']).toEqual('value');
        });
        it('should create arrays of objects', () => {
            class ObjectDto {
            }
            __decorate([
                (0, decorators_1.ApiProperty)(),
                __metadata("design:type", String)
            ], ObjectDto.prototype, "field", void 0);
            class TestDto {
            }
            __decorate([
                (0, decorators_1.ApiProperty)(),
                __metadata("design:type", Array)
            ], TestDto.prototype, "arrayOfStrings", void 0);
            class Test2Dto {
            }
            __decorate([
                (0, decorators_1.ApiProperty)({
                    isArray: true,
                    type: ObjectDto
                }),
                __metadata("design:type", Array)
            ], Test2Dto.prototype, "arrayOfObjects", void 0);
            const schemas = {};
            schemaObjectFactory.exploreModelSchema(TestDto, schemas);
            schemaObjectFactory.exploreModelSchema(Test2Dto, schemas);
            expect(schemas[TestDto.name]).toEqual({
                type: 'object',
                properties: {
                    arrayOfStrings: {
                        type: 'array',
                        items: {
                            type: 'string'
                        }
                    }
                },
                required: ['arrayOfStrings']
            });
            expect(schemas[Test2Dto.name]).toEqual({
                type: 'object',
                properties: {
                    arrayOfObjects: {
                        type: 'array',
                        items: {
                            $ref: '#/components/schemas/ObjectDto'
                        }
                    }
                },
                required: ['arrayOfObjects']
            });
        });
    });
    describe('createEnumSchemaType', () => {
        it('should assign schema type correctly if enumName is provided', () => {
            const metadata = {
                type: 'number',
                enum: [1, 2, 3],
                enumName: 'MyEnum',
                isArray: false
            };
            const schemas = {};
            schemaObjectFactory.createEnumSchemaType('field', metadata, schemas);
            expect(schemas).toEqual({ MyEnum: { enum: [1, 2, 3], type: 'number' } });
        });
    });
    describe('createEnumParam', () => {
        it('should create an enum schema definition', () => {
            const params = {
                required: true,
                isArray: false,
                enumName: 'MyEnum',
                enum: ['a', 'b', 'c']
            };
            const schemas = {};
            schemaObjectFactory.createEnumParam(params, schemas);
            expect(schemas['MyEnum']).toEqual({
                enum: ['a', 'b', 'c'],
                type: 'string'
            });
        });
        it('should create an enum schema definition for an array', () => {
            const params = {
                required: true,
                isArray: true,
                enumName: 'MyEnum',
                schema: {
                    type: 'array',
                    items: {
                        type: 'string',
                        enum: ['a', 'b', 'c']
                    }
                }
            };
            const schemas = {};
            schemaObjectFactory.createEnumParam(params, schemas);
            expect(schemas['MyEnum']).toEqual({
                enum: ['a', 'b', 'c'],
                type: 'string'
            });
        });
    });
});
