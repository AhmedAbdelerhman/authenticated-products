import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter<HttpException> {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();
    const message = exception.message;
    const error = exception['response'];
    delete exception['response'].message;

    response.status(status).json({
      // statusCode: status,
      message: message,
      errors: error,
      timestamp: new Date().toISOString(),
      // path: request.url,
    });
  }
}
