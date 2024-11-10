import { LettersEnum } from '../dto/pagination-query.dto';
export declare class Cat {
    name: string;
    age: number;
    breed: string;
    tags?: string[];
    createdAt: Date;
    urls?: string[];
    options?: Record<string, any>[];
    enum: LettersEnum;
    enumArr: LettersEnum;
    uppercaseString: Uppercase<string>;
    lowercaseString: Lowercase<string>;
    capitalizeString: Capitalize<string>;
    uncapitalizeString: Uncapitalize<string>;
}
