import { Repository } from 'typeorm';
export declare class TypeOrmMethods_Update {
    readonly entityRepository: Repository<any>;
    constructor(entityRepository: Repository<any>);
    updateExist(updateDataDto: any, existRecord: any): Promise<any>;
}
