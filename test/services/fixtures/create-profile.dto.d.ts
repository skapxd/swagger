import 'reflect-metadata';
import { CreateUserDto } from './create-user.dto';
export declare class CreateProfileDto {
    firstname: string;
    lastname: string;
    parent: CreateUserDto;
}
