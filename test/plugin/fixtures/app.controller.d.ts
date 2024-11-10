export declare const appControllerText = "import { Controller, Post, HttpStatus } from '@nestjs/common';\nimport { ApiOperation } from '@nestjs/swagger';\n\nclass Cat {}\n\nclass PromiseCat {}\n\nclass ObservableCat {}\n\n@Controller('cats')\nexport class AppController {\n  onApplicationBootstrap() {}\n\n  /**\n   * create a Cat\n   * \n   * @remarks Creating a test cat\n   * \n   * @throws {500} Something is wrong.\n   * @throws {400} Bad Request.\n   * @throws {400} Missing parameters.\n   *\n   * @returns {Promise<Cat>}\n   * @memberof AppController\n   */\n  @ApiResponse({ status: 403, description: 'Forbidden.' })\n  @Post()\n  async create(): Promise<Cat> {}\n\n  /**\n   * create a test Cat\n   *\n   * @deprecated Use create instead\n   * @returns {Promise<Cat>}\n   * @memberof AppController\n   */\n  @Post()\n  async testCreate(): Promise<Cat> {}\n\n  /**\n   * create a test Cat, not actually deprecated\n   *\n   * @deprecated\n   * @returns {Promise<Cat>}\n   * @memberof AppController\n   */\n  @ApiOperation({ deprecated: false })\n  @Post()\n  async testCreate2(): Promise<Cat> {}\n\n  /**\n   * create a test PromiseCat\n   *\n   * @returns {Promise<PromiseCat>>}\n   * @memberof AppController\n   */\n  @Post()\n  async testCreate3(): Promise<PromiseCat> {}\n\n  /**\n   * create a test ObservableCat\n   *\n   * @returns {Promise<ObservableCat>}\n   * @memberof AppController\n   */\n  @Post()\n  async testCreate4(): Promise<ObservableCat> {}\n\n  /**\n   * find a Cat\n   */\n  @ApiOperation({})\n  @Get()\n  async findOne(): Promise<Cat> {}\n\n  /**\n   * find all Cats im comment\n   *\n   * @returns {Promise<Cat>}\n   * @memberof AppController\n   */\n  @ApiOperation({\n    description: 'find all Cats',\n  })\n  @Get()\n  @HttpCode(HttpStatus.NO_CONTENT)\n  async findAll(): Promise<Cat[]> {}\n}";
export declare const appControllerTextTranspiled = "\"use strict\";\nObject.defineProperty(exports, \"__esModule\", { value: true });\nexports.AppController = void 0;\nconst openapi = require(\"@nestjs/swagger\");\nconst common_1 = require(\"@nestjs/common\");\nconst swagger_1 = require(\"@nestjs/swagger\");\nclass Cat {\n}\nclass PromiseCat {\n}\nclass ObservableCat {\n}\nlet AppController = class AppController {\n    onApplicationBootstrap() { }\n    /**\n     * create a Cat\n     *\n     * @remarks Creating a test cat\n     *\n     * @throws {500} Something is wrong.\n     * @throws {400} Bad Request.\n     * @throws {400} Missing parameters.\n     *\n     * @returns {Promise<Cat>}\n     * @memberof AppController\n     */\n    async create() { }\n    /**\n     * create a test Cat\n     *\n     * @deprecated Use create instead\n     * @returns {Promise<Cat>}\n     * @memberof AppController\n     */\n    async testCreate() { }\n    /**\n     * create a test Cat, not actually deprecated\n     *\n     * @deprecated\n     * @returns {Promise<Cat>}\n     * @memberof AppController\n     */\n    async testCreate2() { }\n    /**\n     * create a test PromiseCat\n     *\n     * @returns {Promise<PromiseCat>>}\n     * @memberof AppController\n     */\n    async testCreate3() { }\n    /**\n     * create a test ObservableCat\n     *\n     * @returns {Promise<ObservableCat>}\n     * @memberof AppController\n     */\n    async testCreate4() { }\n    /**\n     * find a Cat\n     */\n    async findOne() { }\n    /**\n     * find all Cats im comment\n     *\n     * @returns {Promise<Cat>}\n     * @memberof AppController\n     */\n    async findAll() { }\n};\nexports.AppController = AppController;\n__decorate([\n    openapi.ApiOperation({ summary: \"create a Cat\", description: \"Creating a test cat\" }),\n    openapi.ApiResponse({ status: 500, description: \"Something is wrong.\" }),\n    openapi.ApiResponse({ status: 400, description: \"Bad Request.\" }),\n    openapi.ApiResponse({ status: 400, description: \"Missing parameters.\" }),\n    ApiResponse({ status: 403, description: 'Forbidden.' }),\n    (0, common_1.Post)(),\n    openapi.ApiResponse({ status: 201, type: Cat })\n], AppController.prototype, \"create\", null);\n__decorate([\n    openapi.ApiOperation({ summary: \"create a test Cat\", deprecated: true }),\n    (0, common_1.Post)(),\n    openapi.ApiResponse({ status: 201, type: Cat })\n], AppController.prototype, \"testCreate\", null);\n__decorate([\n    (0, swagger_1.ApiOperation)({ summary: \"create a test Cat, not actually deprecated\", deprecated: false }),\n    (0, common_1.Post)(),\n    openapi.ApiResponse({ status: 201, type: Cat })\n], AppController.prototype, \"testCreate2\", null);\n__decorate([\n    openapi.ApiOperation({ summary: \"create a test PromiseCat\" }),\n    (0, common_1.Post)(),\n    openapi.ApiResponse({ status: 201, type: PromiseCat })\n], AppController.prototype, \"testCreate3\", null);\n__decorate([\n    openapi.ApiOperation({ summary: \"create a test ObservableCat\" }),\n    (0, common_1.Post)(),\n    openapi.ApiResponse({ status: 201, type: ObservableCat })\n], AppController.prototype, \"testCreate4\", null);\n__decorate([\n    (0, swagger_1.ApiOperation)({ summary: \"find a Cat\" }),\n    Get(),\n    openapi.ApiResponse({ status: 200, type: Cat })\n], AppController.prototype, \"findOne\", null);\n__decorate([\n    (0, swagger_1.ApiOperation)({ summary: \"find all Cats im comment\", description: 'find all Cats' }),\n    Get(),\n    HttpCode(common_1.HttpStatus.NO_CONTENT),\n    openapi.ApiResponse({ status: common_1.HttpStatus.NO_CONTENT, type: [Cat] })\n], AppController.prototype, \"findAll\", null);\nexports.AppController = AppController = __decorate([\n    (0, common_1.Controller)('cats')\n], AppController);\n";
