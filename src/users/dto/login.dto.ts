import { IsString, IsEmail, IsOptional, IsDate, IsNotEmpty } from 'class-validator';

export class LogInDto {

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

 
}
