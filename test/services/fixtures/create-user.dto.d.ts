import 'reflect-metadata';
import { CreateProfileDto } from './create-profile.dto';
declare class House {
}
export declare class CreateUserDto {
    login: string;
    password: string;
    age?: number;
    custom: any;
    profile: CreateProfileDto;
    tags: string[];
    twoDimensionPrimitives: string[][];
    twoDimensionModels: CreateProfileDto[][];
    urls: string[];
    luckyNumbers: number[];
    options?: Record<string, any>[];
    allOf?: Record<string, any>;
    houses: House[];
    createdAt: Date;
    amount: bigint;
    formatArray: string[];
    static _OPENAPI_METADATA_FACTORY(): {
        tags: {
            type: () => StringConstructor[];
        };
        twoDimensionPrimitives: {
            type: () => StringConstructor[][];
        };
    };
}
export {};
