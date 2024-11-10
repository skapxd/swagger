import { ConsoleLogger, HttpStatus } from '@nestjs/common';
import { LettersEnum } from './pagination-query.dto';
import { TagDto } from './tag.dto';
import { Owner } from '@package-a/owner';
import { AbsoluteOwner } from 'different-cats/dto/absolute-owner.dto';
declare enum NonExportedEnum {
    YES = "YES",
    NO = "NO"
}
declare class NonExportedClass {
    prop: string;
}
export declare enum CategoryState {
    OK = "OK",
    DEPRECATED = "DEPRECATED"
}
export declare class CreateCatDto {
    isIn: string;
    pattern: string;
    positive: number;
    negative: number;
    lengthMin: string | null;
    lengthMinMax: string;
    date: Date;
    active: boolean;
    name: string;
    age: number;
    breed: string;
    tags?: string[];
    createdAt: Date;
    urls?: string[];
    options?: Record<string, any>[];
    enum: LettersEnum;
    externalEnum: HttpStatus;
    customPathImportOwner: Owner;
    absoluteImportOwner: AbsoluteOwner;
    state?: CategoryState;
    enumArr: LettersEnum;
    enumArr2: LettersEnum[];
    tag: TagDto;
    multipleTags: TagDto[];
    nested: {
        first: string;
        second: number;
    };
    nonExportedEnum: NonExportedEnum;
    nonExportedClass: NonExportedClass;
    logger: ConsoleLogger;
}
export {};
