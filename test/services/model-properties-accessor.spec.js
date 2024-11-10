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
describe('ModelPropertiesAccessor', () => {
    class CreateUserDto {
    }
    __decorate([
        (0, decorators_1.ApiProperty)(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "login", void 0);
    __decorate([
        (0, decorators_1.ApiProperty)(),
        __metadata("design:type", String)
    ], CreateUserDto.prototype, "password", void 0);
    let modelPropertiesAccessor;
    beforeEach(() => {
        modelPropertiesAccessor = new model_properties_accessor_1.ModelPropertiesAccessor();
    });
    describe('getModelProperties', () => {
        it('should return all decorated properties', () => {
            expect(modelPropertiesAccessor.getModelProperties(CreateUserDto.prototype)).toEqual(['login', 'password']);
        });
    });
});
