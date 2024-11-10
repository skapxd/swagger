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
describe('ApiResponse', () => {
    describe('when applied on the method level', () => {
        let TestAppController = class TestAppController {
            get(testId) {
                return testId;
            }
        };
        __decorate([
            (0, common_1.Get)(),
            (0, decorators_1.ApiResponse)({ status: 204 }),
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
            expect(Reflect.hasMetadata(constants_1.DECORATORS.API_RESPONSE, controller.get)).toBeTruthy();
            expect(Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, controller.get)).toEqual({
                '204': { description: '', isArray: undefined, type: undefined }
            });
        });
        it.each([
            { decorator: decorators_1.ApiOkResponse, status: common_1.HttpStatus.OK },
            { decorator: decorators_1.ApiCreatedResponse, status: common_1.HttpStatus.CREATED },
            { decorator: decorators_1.ApiAcceptedResponse, status: common_1.HttpStatus.ACCEPTED },
            { decorator: decorators_1.ApiNoContentResponse, status: common_1.HttpStatus.NO_CONTENT },
            {
                decorator: decorators_1.ApiMovedPermanentlyResponse,
                status: common_1.HttpStatus.MOVED_PERMANENTLY
            },
            { decorator: decorators_1.ApiFoundResponse, status: common_1.HttpStatus.FOUND },
            { decorator: decorators_1.ApiBadRequestResponse, status: common_1.HttpStatus.BAD_REQUEST },
            { decorator: decorators_1.ApiUnauthorizedResponse, status: common_1.HttpStatus.UNAUTHORIZED },
            {
                decorator: decorators_1.ApiTooManyRequestsResponse,
                status: common_1.HttpStatus.TOO_MANY_REQUESTS
            },
            { decorator: decorators_1.ApiNotFoundResponse, status: common_1.HttpStatus.NOT_FOUND },
            {
                decorator: decorators_1.ApiInternalServerErrorResponse,
                status: common_1.HttpStatus.INTERNAL_SERVER_ERROR
            },
            { decorator: decorators_1.ApiBadGatewayResponse, status: common_1.HttpStatus.BAD_GATEWAY },
            { decorator: decorators_1.ApiConflictResponse, status: common_1.HttpStatus.CONFLICT },
            { decorator: decorators_1.ApiForbiddenResponse, status: common_1.HttpStatus.FORBIDDEN },
            {
                decorator: decorators_1.ApiGatewayTimeoutResponse,
                status: common_1.HttpStatus.GATEWAY_TIMEOUT
            },
            { decorator: decorators_1.ApiGoneResponse, status: common_1.HttpStatus.GONE },
            {
                decorator: decorators_1.ApiMethodNotAllowedResponse,
                status: common_1.HttpStatus.METHOD_NOT_ALLOWED
            },
            {
                decorator: decorators_1.ApiNotAcceptableResponse,
                status: common_1.HttpStatus.NOT_ACCEPTABLE
            },
            {
                decorator: decorators_1.ApiNotImplementedResponse,
                status: common_1.HttpStatus.NOT_IMPLEMENTED
            },
            {
                decorator: decorators_1.ApiPreconditionFailedResponse,
                status: common_1.HttpStatus.PRECONDITION_FAILED
            },
            {
                decorator: decorators_1.ApiPayloadTooLargeResponse,
                status: common_1.HttpStatus.PAYLOAD_TOO_LARGE
            },
            {
                decorator: decorators_1.ApiPaymentRequiredResponse,
                status: common_1.HttpStatus.PAYMENT_REQUIRED
            },
            {
                decorator: decorators_1.ApiRequestTimeoutResponse,
                status: common_1.HttpStatus.REQUEST_TIMEOUT
            },
            {
                decorator: decorators_1.ApiServiceUnavailableResponse,
                status: common_1.HttpStatus.SERVICE_UNAVAILABLE
            },
            {
                decorator: decorators_1.ApiUnprocessableEntityResponse,
                status: common_1.HttpStatus.UNPROCESSABLE_ENTITY
            },
            {
                decorator: decorators_1.ApiUnsupportedMediaTypeResponse,
                status: common_1.HttpStatus.UNSUPPORTED_MEDIA_TYPE
            },
            { decorator: decorators_1.ApiDefaultResponse, status: 'default' }
        ])('should not allow to override status of $decorator.name[$status]', ({ decorator, status }) => {
            let TestAppController = class TestAppController {
                get(testId) {
                    return testId;
                }
            };
            __decorate([
                (0, common_1.Get)(),
                decorator({
                    status: 2010
                }),
                __param(0, (0, common_1.Param)('testId')),
                __metadata("design:type", Function),
                __metadata("design:paramtypes", [String]),
                __metadata("design:returntype", String)
            ], TestAppController.prototype, "get", null);
            TestAppController = __decorate([
                (0, common_1.Controller)('tests/:testId')
            ], TestAppController);
            const controller = new TestAppController();
            expect(Reflect.hasMetadata(constants_1.DECORATORS.API_RESPONSE, controller.get)).toBeTruthy();
            expect(Reflect.getMetadata(constants_1.DECORATORS.API_RESPONSE, controller.get)).toEqual({
                [status]: { description: '', isArray: undefined, type: undefined }
            });
        });
    });
});
