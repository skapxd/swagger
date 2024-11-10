"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const fs_1 = require("fs");
const path_1 = require("path");
const SwaggerParser = require("swagger-parser");
const lib_1 = require("../lib");
const app_module_1 = require("./src/app.module");
const cat_class_1 = require("./src/cats/classes/cat.class");
const tag_dto_1 = require("./src/cats/dto/tag.dto");
describe('Validate OpenAPI schema', () => {
    let app;
    let options;
    beforeEach(async () => {
        app = await core_1.NestFactory.create(app_module_1.ApplicationModule, {
            logger: false
        });
        app.setGlobalPrefix('api/');
        app.enableVersioning();
        options = new lib_1.DocumentBuilder()
            .setTitle('Cats example')
            .setDescription('The cats API description')
            .setVersion('1.0')
            .setBasePath('api')
            .addTag('cats')
            .addBasicAuth()
            .addBearerAuth()
            .addOAuth2()
            .addApiKey()
            .addApiKey({ type: 'apiKey' }, 'key1')
            .addApiKey({ type: 'apiKey' }, 'key2')
            .addCookieAuth()
            .addSecurityRequirements('bearer')
            .addSecurityRequirements({ basic: [], cookie: [] })
            .addGlobalParameters({
            name: 'x-tenant-id',
            in: 'header',
            schema: { type: 'string' }
        })
            .build();
    });
    it('should produce a valid OpenAPI 3.0 schema', async () => {
        await lib_1.SwaggerModule.loadPluginMetadata(async () => ({
            '@nestjs/swagger': {
                models: [
                    [
                        Promise.resolve().then(() => require('./src/cats/classes/cat.class')),
                        {
                            Cat: {
                                tags: {
                                    description: 'Tags of the cat',
                                    example: ['tag1', 'tag2'],
                                    required: false
                                },
                                siblings: {
                                    required: false,
                                    type: () => ({
                                        ids: { required: true, type: () => Number }
                                    })
                                }
                            }
                        }
                    ],
                    [
                        Promise.resolve().then(() => require('./src/cats/dto/create-cat.dto')),
                        {
                            CreateCatDto: {
                                enumWithDescription: {
                                    enum: await Promise.resolve().then(() => require('./src/cats/dto/pagination-query.dto')).then((f) => f.LettersEnum)
                                },
                                name: {
                                    description: 'Name of the cat'
                                }
                            }
                        }
                    ]
                ],
                controllers: [
                    [
                        Promise.resolve().then(() => require('./src/cats/cats.controller')),
                        {
                            CatsController: {
                                findAllBulk: {
                                    type: [
                                        await Promise.resolve().then(() => require('./src/cats/classes/cat.class')).then((f) => f.Cat)
                                    ],
                                    summary: 'Find all cats in bulk'
                                }
                            }
                        }
                    ]
                ]
            }
        }));
        const document = lib_1.SwaggerModule.createDocument(app, options);
        const doc = JSON.stringify(document, null, 2);
        (0, fs_1.writeFileSync)((0, path_1.join)(__dirname, 'api-spec.json'), doc);
        try {
            const api = await SwaggerParser.validate(document);
            console.log('API name: %s, Version: %s', api.info.title, api.info.version);
            expect(api.info.title).toEqual('Cats example');
            expect(api.paths['/api/cats']['post']['callbacks']['myEvent']['{$request.body#/callbackUrl}']['post']['requestBody']['content']['application/json']['schema']['properties']['breed']['type']).toEqual('string');
            expect(api.paths['/api/cats']['post']['callbacks']['mySecondEvent']['{$request.body#/callbackUrl}']['post']['requestBody']['content']['application/json']['schema']['properties']['breed']['type']).toEqual('string');
            expect(api.paths['/api/cats']['get']['x-codeSamples'][0]['lang']).toEqual('JavaScript');
            expect(api.paths['/api/cats']['get']['x-multiple']['test']).toEqual('test');
            expect(api.paths['/api/cats']['get']['tags']).toContain('tag1');
            expect(api.paths['/api/cats']['get']['tags']).toContain('tag2');
        }
        catch (err) {
            console.log(doc);
            expect(err).toBeUndefined();
        }
    });
    it('should fix colons in url', async () => {
        const document = lib_1.SwaggerModule.createDocument(app, options);
        expect(document.paths['/api/v1/express:colon:another/{prop}']).toBeDefined();
    });
    it('should merge custom components passed via config', async () => {
        const components = {
            schemas: {
                Person: {
                    oneOf: [
                        {
                            $ref: (0, lib_1.getSchemaPath)(cat_class_1.Cat)
                        },
                        {
                            $ref: (0, lib_1.getSchemaPath)(tag_dto_1.TagDto)
                        }
                    ],
                    discriminator: {
                        propertyName: '_resolveType',
                        mapping: {
                            cat: (0, lib_1.getSchemaPath)(cat_class_1.Cat),
                            tag: (0, lib_1.getSchemaPath)(tag_dto_1.TagDto)
                        }
                    }
                }
            }
        };
        const document = lib_1.SwaggerModule.createDocument(app, {
            ...options,
            components: {
                ...options.components,
                ...components
            }
        });
        let api = (await SwaggerParser.validate(document));
        console.log('API name: %s, Version: %s', api.info.title, api.info.version);
        expect(api.components.schemas).toHaveProperty('Person');
        expect(api.components.schemas).toHaveProperty('Cat');
    });
    it('should consider explicit config over auto-detected schema', async () => {
        const document = lib_1.SwaggerModule.createDocument(app, options);
        expect(document.paths['/api/cats/download'].get.responses).toEqual({
            '200': {
                description: 'binary file for download',
                content: {
                    'application/pdf': {
                        schema: { type: 'string', format: 'binary' }
                    },
                    'image/jpeg': { schema: { type: 'string', format: 'binary' } }
                }
            }
        });
    });
});
