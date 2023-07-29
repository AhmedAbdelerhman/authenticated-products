"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmMethods_Find = void 0;
const typeorm_1 = require("typeorm");
class TypeOrmMethods_Find {
    constructor(entityRepository, serviceOptions) {
        this.entityRepository = entityRepository;
        this.serviceOptions = serviceOptions;
    }
    async FindOneBy(query) {
        const data = await this.entityRepository.findOne(Object.assign(Object.assign({}, query), { loadEagerRelations: false }));
        return data;
    }
    setFilter(filters) {
        Object.keys(filters).forEach((filter) => {
            if (typeof filters[filter] == 'string') {
                this.serviceOptions.filter[filter] = (0, typeorm_1.Like)(`%${filters[filter]}%`);
            }
            else {
                this.serviceOptions.filter[filter] = filters[filter];
            }
        });
    }
    async FindAllPagination(filters) {
        this.setFilter(filters);
        const skip = (this.serviceOptions.page - 1) * this.serviceOptions.limit;
        const take = this.serviceOptions.limit;
        let [results, total] = await this.entityRepository.findAndCount({
            where: Object.assign({}, this.serviceOptions.filter),
            loadEagerRelations: false,
            skip: skip,
            take: take,
            order: {
                [this.serviceOptions.orderKey]: this.serviceOptions.orderValue,
            },
        });
        let totalPages = 0;
        if (total) {
            totalPages = Math.ceil(total / this.serviceOptions.limit);
        }
        this.serviceOptions.filter = {};
        let response = null;
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
        }
        else {
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
exports.TypeOrmMethods_Find = TypeOrmMethods_Find;
//# sourceMappingURL=find.orm.js.map