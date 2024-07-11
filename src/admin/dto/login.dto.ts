import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsDate, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class LogInDto {

  @IsNotEmpty()
  userName: string;

  @IsNotEmpty()
  @IsString()

  password: string;

  @IsOptional()
  @IsNumber()
  @Min(30, { message: 'tokenSecondsDuration must be at least 30' })
  @Max(86400, { message: 'tokenSecondsDuration max 86400' })


  tokenSecondsDuration: Number ;

}
