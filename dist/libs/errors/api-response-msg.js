"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApiResponseMsg = void 0;
const common_1 = require("@nestjs/common");
class ApiResponseMsg {
    static successResponseWithPagination(message, data, status = 200) {
        return {
            status,
            message,
            meta: data.meta,
            data: data.results || data,
        };
    }
    static successResponse(message = 'success', data, status = 200) {
        return { status, message, data };
    }
    static errorResponse(message = 'failed', status) {
        throw new common_1.HttpException({ message, noDto: true }, status);
    }
    static notFoundResponse(message = 'Not found', errors, status = 404) {
        throw new common_1.NotFoundException(Object.assign(Object.assign({ message: message }, errors), { status }));
    }
}
exports.ApiResponseMsg = ApiResponseMsg;
//# sourceMappingURL=api-response-msg.js.map