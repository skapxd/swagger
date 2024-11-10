declare const _default: () => Promise<{
    '@nestjs/swagger': {
        models: ((Promise<any> | {
            PaginationQuery: {
                page: {
                    required: boolean;
                    type: () => NumberConstructor;
                };
                sortBy: {
                    required: boolean;
                    type: () => StringConstructor[];
                };
                limit: {
                    required: boolean;
                    type: () => NumberConstructor;
                };
                constrainedLimit: {
                    required: boolean;
                    type: () => NumberConstructor;
                };
                enum: {
                    required: boolean;
                    enum: any;
                };
                enumArr: {
                    required: boolean;
                    enum: any;
                    isArray: boolean;
                };
                letters: {
                    required: boolean;
                    enum: any;
                    isArray: boolean;
                };
                beforeDate: {
                    required: boolean;
                    type: () => DateConstructor;
                };
                filter: {
                    required: boolean;
                    type: () => ObjectConstructor;
                };
            };
        })[] | (Promise<any> | {
            Cat: {
                name: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                age: {
                    required: boolean;
                    type: () => NumberConstructor;
                    description: string;
                    example: number;
                };
                breed: {
                    required: boolean;
                    type: () => StringConstructor;
                    description: string;
                };
                tags: {
                    required: boolean;
                    type: () => StringConstructor[];
                };
                createdAt: {
                    required: boolean;
                    type: () => DateConstructor;
                };
                urls: {
                    required: boolean;
                    type: () => StringConstructor[];
                };
                options: {
                    required: boolean;
                    type: () => ObjectConstructor[];
                };
                enum: {
                    required: boolean;
                    enum: any;
                };
                enumArr: {
                    required: boolean;
                    enum: any;
                };
                uppercaseString: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                lowercaseString: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                capitalizeString: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                uncapitalizeString: {
                    required: boolean;
                    type: () => StringConstructor;
                };
            };
        })[] | (Promise<any> | {
            ExtraModel: {
                one: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                two: {
                    required: boolean;
                    type: () => NumberConstructor;
                };
            };
        })[] | (Promise<any> | {
            TagDto: {
                name: {
                    required: boolean;
                    type: () => StringConstructor;
                };
            };
        })[] | (Promise<any> | {
            CreateCatDto: {
                isIn: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                pattern: {
                    required: boolean;
                    type: () => StringConstructor;
                    pattern: string;
                };
                positive: {
                    required: boolean;
                    type: () => NumberConstructor;
                    default: number;
                    minimum: number;
                };
                negative: {
                    required: boolean;
                    type: () => NumberConstructor;
                    default: number;
                    maximum: number;
                };
                lengthMin: {
                    required: boolean;
                    type: () => StringConstructor;
                    nullable: boolean;
                    default: any;
                    minLength: number;
                };
                lengthMinMax: {
                    required: boolean;
                    type: () => StringConstructor;
                    minLength: number;
                    maxLength: number;
                };
                date: {
                    required: boolean;
                    type: () => ObjectConstructor;
                    default: Date;
                };
                active: {
                    required: boolean;
                    type: () => BooleanConstructor;
                    default: boolean;
                };
                name: {
                    required: boolean;
                    type: () => StringConstructor;
                };
                age: {
                    required: boolean;
                    type: () => NumberConstructor;
                    default: number;
                    minimum: number;
                };
                breed: {
                    required: boolean;
                    type: () => StringConstructor;
                    default: string;
                };
                tags: {
                    required: boolean;
                    type: () => StringConstructor[];
                };
                createdAt: {
                    required: boolean;
                    type: () => DateConstructor;
                };
                urls: {
                    required: boolean;
                    type: () => StringConstructor[];
                };
                options: {
                    required: boolean;
                    type: () => ObjectConstructor[];
                };
                enum: {
                    required: boolean;
                    enum: any;
                };
                externalEnum: {
                    required: boolean;
                    enum: any;
                };
                customPathImportOwner: {
                    required: boolean;
                    enum: any;
                };
                absoluteImportOwner: {
                    required: boolean;
                    enum: any;
                };
                state: {
                    required: boolean;
                    description: string;
                    example: string;
                    enum: any;
                };
                enumArr: {
                    required: boolean;
                    enum: any;
                };
                enumArr2: {
                    required: boolean;
                    enum: any;
                    isArray: boolean;
                };
                tag: {
                    required: boolean;
                    type: () => any;
                };
                multipleTags: {
                    required: boolean;
                    type: () => any[];
                };
                nested: {
                    required: boolean;
                    type: () => {
                        first: {
                            required: boolean;
                            type: () => StringConstructor;
                        };
                        second: {
                            required: boolean;
                            type: () => NumberConstructor;
                        };
                    };
                };
                logger: {
                    required: boolean;
                    type: () => ObjectConstructor;
                };
            };
        })[])[];
        controllers: ((Promise<typeof import("./app.controller")> | {
            AppController: {
                getHello: {
                    summary: string;
                    deprecated: boolean;
                    type: StringConstructor;
                };
                withAliases: {
                    type: StringConstructor;
                };
                withColonExpress: {
                    type: StringConstructor;
                };
                withColonFastify: {
                    summary: string;
                    type: StringConstructor;
                };
            };
        })[] | (Promise<any> | {
            CatsController: {
                create: {
                    type: any;
                };
                findOne: {
                    type: any;
                };
                findAll: {};
                createBulk: {
                    type: any;
                };
                createAsFormData: {
                    type: any;
                };
                getWithEnumParam: {};
                getWithRandomQuery: {};
            };
        })[])[];
    };
}>;
export default _default;
