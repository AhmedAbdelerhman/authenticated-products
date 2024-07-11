import { CanActivate, ExecutionContext, Injectable, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../../users/auth.service';
import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { AuthAdminService } from '../admin-auth.service';

@Injectable()
export class AdminGuard implements CanActivate {
  constructor(
    private authService: AuthAdminService
  ) { }
  async canActivate(
    context: ExecutionContext,
  ) {
    const request = context.switchToHttp().getRequest();
    const authorization = request.headers.authorization
    if (!authorization) {
      ApiResponseMsg.errorResponse("please insert authorization header ", 403)
    }
    const token = authorization.split(' ')[1];

    if (!token) {
      return false;
    }

    const decoded = await this.authService.validateToken(token)

    console.log('@@@@@@@@@@@@@@@{decoded}', decoded);
    if (decoded.role != "admin") {
      return false
    }
    if (decoded !== null) {
      request.user = decoded; // Set the payload in the request context
    }


    return decoded !== null;
  }



}
