import { IsString, IsEmail, IsOptional, IsDate } from 'class-validator';

export class CreateUserDto {
  @IsString()
  @IsOptional()

  username?: string;

  @IsString()
  @IsOptional()

  firstName?: string;

  @IsString()
  @IsOptional()

  lastName?: string;

  @IsEmail()
  email: string;

  @IsString()
  password: string;

  @IsDate()
  @IsOptional()
  birthDate?: Date;

  @IsString()
  @IsOptional()
  address?: string;

  @IsString()
  @IsOptional()
  city?: string;

  @IsString()
  @IsOptional()
  country?: string;

  @IsString()
  @IsOptional()
  postalCode?: string;
}
