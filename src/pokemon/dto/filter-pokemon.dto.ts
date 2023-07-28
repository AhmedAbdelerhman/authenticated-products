import { Transform } from 'class-transformer';
import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsNumberString,
  IsOptional,
  IsString,
  Min,
} from 'class-validator';

export class FilterPokemonDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  type1?: string;

  @Transform((value) => {
    return +value.value;
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  generation?: number;

  @Transform((value) => {
    return +value.value;
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  ATK?: number;

  @Transform((value) => {
    return +value.value;
  })
  @IsOptional()
  @IsNumber()
  @Min(1)
  STA?: number;

  @Transform((value) => {
    return value.value == 'true' || value.value == true;
  })
  @IsOptional()
  @IsBoolean()
  legendary?: boolean;

  @Transform((value) => {
    return value.value == 'true' || value.value == true;
  })
  @IsOptional()
  @IsBoolean()
  shiny?: boolean;

  @Transform((value) => {
    return value.value == 'true' || value.value == true;
  })
  @IsOptional()
  @IsBoolean()
  nest?: boolean;

  @Transform((value) => {
    return value.value == 'true' || value.value == true;
  })
  @IsOptional()
  @IsBoolean()
  new?: boolean;
}
