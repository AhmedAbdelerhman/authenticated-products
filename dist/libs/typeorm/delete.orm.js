"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmMethods_Delete = void 0;
const api_response_msg_1 = require("../errors/api-response-msg");
class TypeOrmMethods_Delete {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async delete(id) {
        const record = await this.entityRepository.findOne({
            where: {
                id,
            },
        });
        if (record) {
            await this.entityRepository.delete(id);
            return api_response_msg_1.ApiResponseMsg.successResponse(`element with id = ${id}  deleted successfully`);
        }
        else {
            return api_response_msg_1.ApiResponseMsg.notFoundResponse(`element with id = ${id} not found`);
        }
    }
}
exports.TypeOrmMethods_Delete = TypeOrmMethods_Delete;
//# sourceMappingURL=delete.orm.js.map