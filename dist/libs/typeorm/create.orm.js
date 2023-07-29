"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TypeOrmMethods_Create = void 0;
const api_response_msg_1 = require("../errors/api-response-msg");
const common_1 = require("@nestjs/common");
class TypeOrmMethods_Create {
    constructor(entityRepository) {
        this.entityRepository = entityRepository;
    }
    async addNew(data, dto) {
        const newItem = new dto();
        Object.assign(newItem, data);
        const itemObject = this.entityRepository.create(newItem);
        const addedItem = await this.entityRepository.save(itemObject);
        if (!addedItem) {
            return api_response_msg_1.ApiResponseMsg.errorResponse('failed', common_1.HttpStatus.UNPROCESSABLE_ENTITY);
        }
        return addedItem;
    }
}
exports.TypeOrmMethods_Create = TypeOrmMethods_Create;
//# sourceMappingURL=create.orm.js.map