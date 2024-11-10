import { LettersEnum } from './pagination-query.dto';
import { TagDto } from './tag.dto';
export declare class CreateCatDto {
    readonly name: string;
    readonly age: number;
    readonly breed: string;
    readonly tags?: string[];
    createdAt: Date;
    readonly urls?: string[];
    readonly options?: Record<string, any>[];
    readonly enumWithDescription: LettersEnum;
    readonly enum: LettersEnum;
    readonly enumArr: LettersEnum[];
    readonly enumWithRef: LettersEnum;
    readonly tag: TagDto;
    nested: {
        first: string;
        second: number;
    };
}
