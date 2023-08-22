import { CanActivate, ExecutionContext, Injectable, Scope } from '@nestjs/common';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({ scope: Scope.REQUEST })
export class UsersGuard implements CanActivate {
  constructor(
    private authService: AuthService
  ) { }
  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization.split(' ')[1];

    if (!token) {
      return false;
    }

    const decoded = this.authService.validateToken(token);
    if (decoded !== null) {
      request.user = decoded; // Set the payload in the request context
    }
    return decoded !== null;
  }



}
