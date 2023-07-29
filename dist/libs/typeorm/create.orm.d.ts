import { Repository } from 'typeorm';
export declare class TypeOrmMethods_Create {
    readonly entityRepository: Repository<any>;
    private id;
    constructor(entityRepository: Repository<any>);
    addNew(data: any, dto: any): Promise<any>;
}
