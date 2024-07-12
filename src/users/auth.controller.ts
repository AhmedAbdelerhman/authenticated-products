import { Body, Controller, HttpCode, Post, Req, UseGuards, UsePipes, ValidationPipe } from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { Throttle } from '@nestjs/throttler';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/create-user';
import { LogInDto } from './dto/login.dto';
import { UsersGuard } from './guards/users.guard';


@Controller('v1/auth')
@ApiTags('Authentication')
@Throttle({ default: { limit:+process.env.publicApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
export class AuthController {



  constructor(private readonly authService: AuthService) { }

  @UsePipes(ValidationPipe)
  @Post("signup")
  @ApiOperation({ summary: 'Signup user' })
  @ApiBody({ type: CreateUserDto })
  

  create(@Body() createUserDto: CreateUserDto) {
    const response =this.authService.signUP(createUserDto);    
    return response
  }


  @UsePipes(ValidationPipe)
  @HttpCode(200)
  @Post("login")
  @ApiOperation({ summary: 'Login user' })
  @ApiBody({ type: LogInDto })  // set default body 

  login(@Body() loginInDto: LogInDto) {
    return this.authService.login(loginInDto);
  }

  @Throttle({ default: { limit:+process.env.authApiRatLimit ||30, ttl: +process.env.ttlRatLimit ||300 } })
  @UseGuards(UsersGuard)
  @HttpCode(200)
  @UsePipes(ValidationPipe)
  @Post("whoami")
  @ApiBearerAuth()  // apply auth token and inject into header in swagger 
  @ApiResponse({ status: 200, description: 'whoami successfully' })

  whoAmI(@Req() req: Request & { user: string }) {
    return this.authService.WhoAmI(req);
  }




}
