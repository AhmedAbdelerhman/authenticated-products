import { Like, Repository } from 'typeorm';
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

  // // make filter dynamic 
  // setFilter(filters) {
  //   Object.keys(filters).forEach((filter) => {
  //     if (typeof filters[filter] == 'string') {
  //       this.serviceOptions.filter[filter] = Like(`%${filters[filter]}%`);
  //     } else {
  //       this.serviceOptions.filter[filter] = filters[filter];
  //     }
  //   });
  // }
  // find with pagination
  async FindAllPagination(filters: TypeOrmMethodsInterface) {
    // this.setFilter(filters);
    // pagination
    const skip = (this.serviceOptions.page - 1) * this.serviceOptions.limit;
    const take = this.serviceOptions.limit;
    // do find
    let [results, total] = await this.entityRepository.findAndCount({
      // where: { ...this.serviceOptions.filter },
      loadEagerRelations: false,

      skip: skip,
      take: take,
      // order: {
      //   [this.serviceOptions.orderKey]: this.serviceOptions.orderValue,
      // },
    });

    let totalPages = 0;
    // if has records
    if (total) {
      totalPages = Math.ceil(total / this.serviceOptions.limit);
    }
  // clear filter
    // this.serviceOptions.filter = {};

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
