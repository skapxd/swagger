import { METADATA_FACTORY_NAME } from '../../../lib/plugin/plugin-constants';
export declare class CreateUserDto {
    firstName: string;
    lastName: string;
    role: string;
    login: string;
    password: string;
    static [METADATA_FACTORY_NAME](): {
        firstName: {
            required: boolean;
            type: StringConstructor;
        };
        lastName: {
            required: boolean;
            type: StringConstructor;
        };
    };
}
