import { HttpException, HttpStatus } from '@nestjs/common';

export class ApiResponse {
  static successResponseWithPagination(message: string, data: any) {
    return {
      message: message,
      meta: data.meta,
      data: data.results,
    };
  }

  static successResponse(message: string, data, status: number = 200) {
    return { status, message, data };
  }

  static errorResponse(message: string, errors: any, status: number) {
    throw new HttpException({ message, ...errors, noDto: true }, status);
  }

  static errorResponseAxios(
    message: string,
    errors: any,
    errorType: string,
    status: number,
  ) {
    throw new HttpException(
      { message, errors, errorType, noDto: true },
      status,
    );
  }

  static unAuthorizedResponse() {
    throw new HttpException(
      { message: 'Unauthorized', noDto: true },
      HttpStatus.UNAUTHORIZED,
    );
  }

  static errorCredentialResponse(message: string, errors) {
    throw new HttpException(
      { message: message, ...errors, noDto: true },
      HttpStatus.UNAUTHORIZED,
    );
  }

  static notFoundResponse(message = 'Not found') {
    throw new HttpException(
      { message: message, noDto: true },
      HttpStatus.NOT_FOUND,
    );
  }

  static notAcceptable(message = 'Not Acceptable', errors?) {
    throw new HttpException(
      { message: message, ...errors, noDto: true },
      HttpStatus.NOT_ACCEPTABLE,
    );
  }
}
