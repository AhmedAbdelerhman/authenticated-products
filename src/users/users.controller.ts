import { Body, Controller, Param, Patch, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user';
import { UsersService } from './users.service';
import { Request } from 'express';
import { LogInDto } from './dto/login.dto';
import { UsersGuard } from './guards/users.guard';

@Controller('users')
export class UsersController {



    constructor(private readonly userService: UsersService) {}

    @UsePipes(ValidationPipe)
    @Post("signup")
    create(@Body() createUserDto: CreateUserDto) {
      return this.userService.signUP(createUserDto);
    }


    @UsePipes(ValidationPipe)
    @Post("login")
    login(@Body() loginInDto: LogInDto) {
      return this.userService.login(loginInDto);
    }

    @UseGuards(UsersGuard)
    @UsePipes(ValidationPipe)
    @Post("whoami")
    whoAmI(@Req() req:Request) {
      return this.userService.WhoAmI(req);
    }




}
