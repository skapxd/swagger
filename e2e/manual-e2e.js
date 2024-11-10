"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const platform_express_1 = require("@nestjs/platform-express");
const platform_fastify_1 = require("@nestjs/platform-fastify");
const path_1 = require("path");
const lib_1 = require("../lib");
const app_module_1 = require("./src/app.module");
const port = 4001;
const host = 'localhost';
const docRelPath = '/api-docs';
const USE_FASTIFY = true;
const ENABLE_BASIC_AUTH = false;
const adapter = USE_FASTIFY
    ? new platform_fastify_1.FastifyAdapter({
        ignoreTrailingSlash: false
    })
    : new platform_express_1.ExpressAdapter();
const publicFolderPath = (0, path_1.join)(__dirname, '../../e2e', 'public');
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.ApplicationModule, adapter);
    const httpAdapter = app.getHttpAdapter();
    ENABLE_BASIC_AUTH &&
        httpAdapter.use(docRelPath, (req, res, next) => {
            function parse(input) {
                const [, encodedPart] = input.split(' ');
                const buff = Buffer.from(encodedPart, 'base64');
                const text = buff.toString('ascii');
                const [name, pass] = text.split(':');
                return { name, pass };
            }
            function unauthorizedResponse() {
                if (USE_FASTIFY) {
                    res.statusCode = 401;
                    res.setHeader('WWW-Authenticate', 'Basic');
                }
                else {
                    res.status(401);
                    res.set('WWW-Authenticate', 'Basic');
                }
                next();
            }
            if (!req.headers.authorization) {
                return unauthorizedResponse();
            }
            const credentials = parse(req.headers.authorization);
            if (!credentials ||
                credentials?.name !== 'admin' ||
                credentials?.pass !== 'admin') {
                return unauthorizedResponse();
            }
            next();
        });
    app.setGlobalPrefix('/api/v1');
    const swaggerSettings = new lib_1.DocumentBuilder()
        .setTitle('Cats example')
        .setDescription('The cats API description')
        .setVersion('1.0')
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
        .build();
    const document = lib_1.SwaggerModule.createDocument(app, swaggerSettings, {
        deepScanRoutes: true,
        ignoreGlobalPrefix: false,
        autoTagControllers: true,
        extraModels: []
    });
    lib_1.SwaggerModule.setup(docRelPath, app, document, {
        customSiteTitle: 'Demo API - Swagger UI 1',
        swaggerOptions: {
            persistAuthorization: true,
            defaultModelsExpandDepth: -1,
            syntaxHighlight: {
                activate: true,
                theme: 'tomorrow-night'
            },
            tryItOutEnabled: true
        },
        customfavIcon: '/public/favicon.ico',
        customCssUrl: '/public/theme.css'
    });
    lib_1.SwaggerModule.setup('/swagger-docs', app, document, {
        customSiteTitle: 'Demo API - Swagger UI 2',
        swaggerOptions: {
            persistAuthorization: true,
            defaultModelsExpandDepth: -1,
            tagsSorter: (a, b) => a.localeCompare(b),
            operationsSorter: (a, b) => a.get('id').localeCompare(b.get('id'))
        }
    });
    lib_1.SwaggerModule.setup('/:tenantId/api-docs', app, document, {
        patchDocumentOnRequest: (req, res, document1) => ({
            ...document1,
            info: {
                ...document1.info,
                title: `${req.params.tenantId}'s API document`
            }
        })
    });
    USE_FASTIFY
        ? app.useStaticAssets({
            root: publicFolderPath,
            prefix: `/public`,
            decorateReply: false
        })
        : app.useStaticAssets(publicFolderPath, {
            prefix: '/public'
        });
    await app.listen(port, host);
    const baseUrl = `http://${host}:${port}`;
    const startMessage = `Server started at ${baseUrl}; SwaggerUI at ${baseUrl + docRelPath};`;
    common_1.Logger.log(startMessage);
}
bootstrap();
