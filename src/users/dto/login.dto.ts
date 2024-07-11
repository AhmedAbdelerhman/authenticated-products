import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsString, IsEmail, IsOptional, IsDate, IsNotEmpty, IsNumber, Min, Max } from 'class-validator';

export class LogInDto {

  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({ example: 'user@example.com' }) // Add an example value for the email field

  email: string;

  @IsNotEmpty()
  @IsString()
  @ApiProperty({ example: 'password123' }) // Add an example value for the password field

  password: string;

  @IsOptional()
  @IsNumber()
  @ApiPropertyOptional({ example: 100 })
  @Min(30, { message: 'tokenSecondsDuration must be at least 30' })
  @Max(86400, { message: 'tokenSecondsDuration max 86400' })


  tokenSecondsDuration: Number ;

}
