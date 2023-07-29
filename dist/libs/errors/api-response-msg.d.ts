export declare class ApiResponseMsg {
    static successResponseWithPagination(message: string, data: any, status?: number): {
        status: number;
        message: string;
        meta: any;
        data: any;
    };
    static successResponse(message?: string, data?: any, status?: number): {
        status: number;
        message: string;
        data: any;
    };
    static errorResponse(message: string, status: number): void;
    static notFoundResponse(message?: string, errors?: any, status?: number): void;
}
