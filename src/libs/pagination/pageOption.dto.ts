import { Transform, Type } from 'class-transformer';
import {
  Allow,
  IsEnum,
  IsInt,
  IsNumber,
  IsOptional,
  IsString,
  Max,
  Min,
} from 'class-validator';
import { OrderValue } from './orderBy.constant';

export class PageOptionsDto {
  @Type(() => Number)
  @IsInt()
  @Min(1)
  @Max(100)
  @IsOptional()
  readonly limit?: number = 10;

  @Type(() => Number)
  @IsNumber()
  @Min(1)
  @IsOptional()
  readonly page?: number = 1;



  @Transform((orderValue) => orderValue.value.toLowerCase())
  @IsEnum(OrderValue)
  @IsOptional()
  readonly orderValue?: OrderValue;
}
