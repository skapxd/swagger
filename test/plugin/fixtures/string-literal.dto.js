"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringLiteralDtoTextTranspiled = exports.stringLiteralDtoText = void 0;
exports.stringLiteralDtoText = `
export class StringLiteralDto {
  @ApiProperty()
  valueOne: "one";
  @ApiProperty()
  valueTwo: "one" | "two";
}
`;
exports.stringLiteralDtoTextTranspiled = `import * as openapi from "@nestjs/swagger";
export class StringLiteralDto {
    static _OPENAPI_METADATA_FACTORY() {
        return { valueOne: { required: true, type: () => String }, valueTwo: { required: true, type: () => Object } };
    }
}
__decorate([
    ApiProperty()
], StringLiteralDto.prototype, "valueOne", void 0);
__decorate([
    ApiProperty()
], StringLiteralDto.prototype, "valueTwo", void 0);
`;
