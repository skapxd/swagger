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
exports.AppController = void 0;
const common_1 = require("@nestjs/common");
const decorators_1 = require("../../../../lib/decorators");
let AppController = class AppController {
    getHello() {
        return 'Hello world!';
    }
    withAliases() {
        return 'Hello world!';
    }
    withColonExpress() {
        return 'Hello world!';
    }
    withColonFastify() {
        return 'Hello world!';
    }
};
exports.AppController = AppController;
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "getHello", null);
__decorate([
    (0, common_1.Get)(['alias1', 'alias2']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "withAliases", null);
__decorate([
    (0, common_1.Get)('express[:]colon[:]another/:prop'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "withColonExpress", null);
__decorate([
    (0, decorators_1.ApiOperation)({ summary: 'Returns Hello World' }),
    (0, common_1.Get)('fastify::colon::another/:prop'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", String)
], AppController.prototype, "withColonFastify", null);
exports.AppController = AppController = __decorate([
    (0, common_1.Controller)()
], AppController);
