export declare enum LettersEnum {
    A = "A",
    B = "B",
    C = "C"
}
export declare class PaginationQuery {
    page: number;
    sortBy: string[];
    limit: number;
    constrainedLimit?: number;
    enum: LettersEnum;
    enumArr: LettersEnum[];
    letters: LettersEnum[];
    beforeDate: Date;
    filter: Record<string, any>;
    static _OPENAPI_METADATA_FACTORY(): {
        sortBy: {
            type: () => StringConstructor[];
        };
    };
}
