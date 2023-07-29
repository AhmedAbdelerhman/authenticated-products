import { Repository } from 'typeorm';
import { TypeOrmMethodsInterface } from './find.interface';
import { ServiceOptions } from './serviceOptions.interfaces';
export declare class TypeOrmMethods_Find {
    readonly entityRepository: Repository<any>;
    serviceOptions: ServiceOptions;
    constructor(entityRepository: Repository<any>, serviceOptions: ServiceOptions);
    FindOneBy(query: TypeOrmMethodsInterface): Promise<any>;
    setFilter(filters: any): void;
    FindAllPagination(filters: TypeOrmMethodsInterface): Promise<any>;
}
