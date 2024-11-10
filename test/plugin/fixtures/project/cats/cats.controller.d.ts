import { CatsService } from './cats.service';
import { Cat } from './classes/cat.class';
import { CreateCatDto } from './dto/create-cat.dto';
import { LettersEnum, PaginationQuery } from './dto/pagination-query.dto';
export declare class CatsController {
    private readonly catsService;
    constructor(catsService: CatsService);
    create(createCatDto: CreateCatDto): Promise<Cat>;
    findOne(id: string): Cat;
    findAll(paginationQuery: PaginationQuery): void;
    createBulk(createCatDto: CreateCatDto[]): Promise<Cat>;
    createAsFormData(createCatDto: CreateCatDto): Promise<Cat>;
    getWithEnumParam(type: LettersEnum): void;
    getWithRandomQuery(type: string): void;
}
