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
const constants_1 = require("../../lib/constants");
const decorators_1 = require("../../lib/decorators");
describe('ApiParam', () => {
    describe('when applied on the class level', () => {
        let TestAppController = class TestAppController {
            get(testId) {
                return testId;
            }
            noAPiMethod() { }
        };
        __decorate([
            (0, common_1.Get)(),
            __param(0, (0, common_1.Param)('testId')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", String)
        ], TestAppController.prototype, "get", null);
        TestAppController = __decorate([
            (0, decorators_1.ApiParam)({ name: 'testId' }),
            (0, common_1.Controller)('tests/:testId')
        ], TestAppController);
        it('should attach metadata to all API methods', () => {
            const controller = new TestAppController();
            expect(Reflect.hasMetadata(constants_1.DECORATORS.API_PARAMETERS, controller.get)).toBeTruthy();
            expect(Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, controller.get)).toEqual([{ in: 'path', name: 'testId', required: true }]);
        });
        it('should not attach metadata to non-API method (not a route)', () => {
            const controller = new TestAppController();
            expect(Reflect.hasMetadata(constants_1.DECORATORS.API_PARAMETERS, controller.noAPiMethod)).toBeFalsy();
        });
    });
    describe('when applied on the method level', () => {
        let TestAppController = class TestAppController {
            get(testId) {
                return testId;
            }
        };
        __decorate([
            (0, common_1.Get)(),
            (0, decorators_1.ApiParam)({ name: 'testId' }),
            __param(0, (0, common_1.Param)('testId')),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", [String]),
            __metadata("design:returntype", String)
        ], TestAppController.prototype, "get", null);
        TestAppController = __decorate([
            (0, common_1.Controller)('tests/:testId')
        ], TestAppController);
        it('should attach metadata to a given method', () => {
            const controller = new TestAppController();
            expect(Reflect.hasMetadata(constants_1.DECORATORS.API_PARAMETERS, controller.get)).toBeTruthy();
            expect(Reflect.getMetadata(constants_1.DECORATORS.API_PARAMETERS, controller.get)).toEqual([{ in: 'path', name: 'testId', required: true }]);
        });
    });
});
