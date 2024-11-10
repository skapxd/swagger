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
exports.CreateProfileDto = void 0;
require("reflect-metadata");
const decorators_1 = require("../../../lib/decorators");
const create_user_dto_1 = require("./create-user.dto");
class CreateProfileDto {
}
exports.CreateProfileDto = CreateProfileDto;
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "firstname", void 0);
__decorate([
    (0, decorators_1.ApiProperty)(),
    __metadata("design:type", String)
], CreateProfileDto.prototype, "lastname", void 0);
__decorate([
    (0, decorators_1.ApiProperty)({
        type: () => create_user_dto_1.CreateUserDto,
        name: 'parent'
    }),
    __metadata("design:type", create_user_dto_1.CreateUserDto)
], CreateProfileDto.prototype, "parent", void 0);
