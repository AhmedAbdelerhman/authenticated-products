import {
  HttpException,
  NotAcceptableException,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';

export class ApiResponseMsg {
  static successResponseWithPagination(
    message: string,
    data: any,
    status: number = 200,
  ) {
    return {
      status,
      message,
      meta: data.meta,
      data: data.results || data,
    };
  }

  static successResponse(message: string ="success", data?:any, status: number = 200) {
    return { status, message, data };
  }

  static nodDataResponse(message: string) {
    return { message, data: [] };
  }

  // static errorResponseStatus(message: string, errors, status?: number) {

  //   throw new HttpException({message, ...errors, noDto: true }, status);
  // }

  static errorResponse(message: string="failed", status: number) {
    throw new HttpException({ message, noDto: true }, status);
  }

  static unAuthorizedResponse() {
    throw new UnauthorizedException({ message: 'Unauthorized', noDto: true });
  }

  static errorCredentialResponse(message: string, errors = {}) {
    throw new UnauthorizedException({
      message: message,
      ...errors,
      noDto: true,
    });
  }

  static notFoundResponse(message = 'Not found', errors?) {
    throw new NotFoundException({
      message: message,
      ...errors,
      noDto: true,
    });
  }

  static notAcceptable(message = 'Not Acceptable', errors?) {
    throw new NotAcceptableException({
      message: message,
      ...errors,
      noDto: true,
    });
  }
}
