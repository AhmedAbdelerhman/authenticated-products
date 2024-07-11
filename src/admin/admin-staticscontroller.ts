import { Body, Query, Controller, Param, Patch, Post, Req, UseGuards, Get, UsePipes, ValidationPipe, HttpCode, Logger } from '@nestjs/common';
import { Request } from 'express';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { Throttle } from '@nestjs/throttler';
import { LogInDto } from './dto/login.dto';
import { AdminGuard } from './guards/admin.guard';
import { AuthAdminService } from './admin-auth.service';
import { AdminStaticsService } from './admin-statics.service';
import { ApiExcludeEndpoint } from '@nestjs/swagger';


@Controller('v1/admin/')
@Throttle({ default: { limit:+process.env.publicApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
export class AdminStaticsController {



  constructor(private readonly adminStaticsService: AdminStaticsService) { }

 

  @Throttle({ default: { limit:+process.env.authApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
  @UseGuards(AdminGuard)
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @Get("statics")
  @ApiExcludeEndpoint() 

  statics(@Query() pageOptionsDto: PageOptionsDto,)  {
    return this.adminStaticsService.adminStatics(pageOptionsDto)
  }

}
