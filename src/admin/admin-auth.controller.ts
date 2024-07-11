import { Body, Query, Controller, Param, Patch, Post, Req, UseGuards, Get, UsePipes, ValidationPipe, HttpCode, Logger } from '@nestjs/common';
import { Request } from 'express';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { ApiTags, ApiResponse, ApiOperation, ApiBody, ApiBearerAuth } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { LogInDto } from './dto/login.dto';
import { AdminGuard } from './guards/admin.guard';
import { AuthAdminService } from './admin-auth.service';


@Controller('v1/admin/auth')
@Throttle({ default: { limit:+process.env.publicApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
export class AdminAuthController {



  constructor(private readonly authService: AuthAdminService) { }

 
  @UsePipes(ValidationPipe)
  @HttpCode(200)
  @Post("login")
  @ApiOperation({ summary: 'admin-login' })
  @ApiBody({ type: LogInDto })  // set default body 
  adminLogin(@Body() loginInDto: LogInDto) {
    return this.authService.adminLogin(loginInDto);
  }


  @Throttle({ default: { limit:+process.env.authApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @Post("whoami")
  @ApiBearerAuth()  // apply auth token and inject into header in swagger 
  @ApiResponse({ status: 200, description: 'whoami successfully' })

  whoAmI(@Req() req: Request & { user: string }) {
    return {role:"admin"}
  }

}
