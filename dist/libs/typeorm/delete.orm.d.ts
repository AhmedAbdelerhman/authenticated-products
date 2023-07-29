import { Repository } from 'typeorm';
export declare class TypeOrmMethods_Delete {
    readonly entityRepository: Repository<any>;
    constructor(entityRepository: Repository<any>);
    delete(id: any): Promise<void | {
        status: number;
        message: string;
        data: any;
    }>;
}
