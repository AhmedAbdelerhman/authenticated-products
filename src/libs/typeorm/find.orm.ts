import { Repository } from 'typeorm';
import { TypeOrmMethodsInterface } from './find.interface';
import { ServiceOptions } from './serviceOptions.interfaces';


export class TypeOrmMethods_Find {
  constructor(
    public readonly entityRepository: Repository<any>,
    public serviceOptions: ServiceOptions,
  ) {}

  // find a single record by specific key
  async FindOneBy(query: TypeOrmMethodsInterface) {
    const data = await this.entityRepository.findOne({
      ...query,
      loadEagerRelations: false,
    });

    return data;
  }

  // find with pagination
  async FindAllPagination(query: TypeOrmMethodsInterface) {
    // pagination
    const skip = (this.serviceOptions.page - 1) * this.serviceOptions.limit;
    const take = this.serviceOptions.limit;

    // do find
    let [results, total] = await this.entityRepository.findAndCount({
      ...query,
      loadEagerRelations: false,

      skip: skip,
      take: take,
      order: {
        [this.serviceOptions.orderKey]: this.serviceOptions.orderValue,
      },
    });

    let totalPages = 0;
    // if has records
    if (total) {
      totalPages = Math.ceil(total / this.serviceOptions.limit);
    }

    let response: any = null;
    if (total > 0) {
      response = {
        meta: {
          total: Number(total),
          per_page: Number(results.length),
          total_pages: Number(totalPages),
          current_page: Number(this.serviceOptions.page),
        },
        results: results,
      };
    } else {
      response = {
        meta: {
          total: Number(total),
          per_page: Number(results.length),
          total_pages: Number(totalPages),
          current_page: Number(this.serviceOptions.page),
        },
        results: [],
      };
    }

    return response;
  }
}
