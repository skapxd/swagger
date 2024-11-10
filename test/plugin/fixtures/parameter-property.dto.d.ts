export declare const parameterPropertyDtoText = "\nexport class ParameterPropertyDto {\n  constructor(\n    readonly readonlyValue?: string, \n    private privateValue: string | null, \n    public publicValue: ItemDto[], \n    regularParameter: string\n    protected protectedValue: string = '1234', \n) {}\n}\n\nexport enum LettersEnum {\n  A = 'A',\n  B = 'B',\n  C = 'C'\n}\n\nexport class ItemDto {\n  constructor(readonly enumValue: LettersEnum) {}\n}\n";
export declare const parameterPropertyDtoTextTranspiled = "import * as openapi from \"@nestjs/swagger\";\nexport class ParameterPropertyDto {\n    constructor(readonlyValue, privateValue, publicValue, regularParameter, protectedValue = '1234') {\n        this.readonlyValue = readonlyValue;\n        this.privateValue = privateValue;\n        this.publicValue = publicValue;\n        this.protectedValue = protectedValue;\n    }\n    static _OPENAPI_METADATA_FACTORY() {\n        return { readonlyValue: { required: false, type: () => String }, privateValue: { required: true, type: () => String, nullable: true }, publicValue: { required: true, type: () => [require(\"./parameter-property.dto\").ItemDto] }, protectedValue: { required: true, type: () => String, default: \"1234\" } };\n    }\n}\nexport var LettersEnum;\n(function (LettersEnum) {\n    LettersEnum[\"A\"] = \"A\";\n    LettersEnum[\"B\"] = \"B\";\n    LettersEnum[\"C\"] = \"C\";\n})(LettersEnum || (LettersEnum = {}));\nexport class ItemDto {\n    constructor(enumValue) {\n        this.enumValue = enumValue;\n    }\n    static _OPENAPI_METADATA_FACTORY() {\n        return { enumValue: { required: true, enum: require(\"./parameter-property.dto\").LettersEnum } };\n    }\n}\n";
