import { CallHandler, ExecutionContext, Injectable, NestInterceptor, Logger } from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const request = context.switchToHttp().getRequest();
    const method = request.method;
    const url = request.url;

    const now = Date.now();
    return next
      .handle()
      .pipe(
        tap(response => {
          const delay = Date.now() - now;
          this.logger.verbose(`Method: ${method} URL: ${url} Response: ${JSON.stringify(response)} Delay: ${delay}ms`);
        }),
      );
  }
}
