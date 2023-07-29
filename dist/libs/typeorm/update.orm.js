"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmMethods_Update = void 0;
class TypeOrmMethods_Update {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async updateExist(updateDataDto, existRecord) {
        this.entityRepository.merge(existRecord, updateDataDto);
        return await this.entityRepository.save(existRecord);
    }
}
exports.TypeOrmMethods_Update = TypeOrmMethods_Update;
//# sourceMappingURL=update.orm.js.map