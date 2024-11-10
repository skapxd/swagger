import { Cat } from './classes/cat.class';
import { CreateCatDto } from './dto/create-cat.dto';
export declare class CatsService {
    private readonly cats;
    create(cat: CreateCatDto): Cat;
    findOne(id: number): Cat;
}
