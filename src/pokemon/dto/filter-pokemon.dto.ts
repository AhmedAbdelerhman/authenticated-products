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

  @Transform((value) => +value.value)
  @IsOptional()
  @IsNumber()
  @Min(1)
  generation?: number;

  @IsOptional()
  @IsBoolean()
  legendary?: boolean;

  @IsOptional()
  @IsBoolean()
  regional?: boolean;

  @IsOptional()
  @IsBoolean()
  spawns?: boolean;

  @IsOptional()
  @IsBoolean()
  raidable?: boolean;

  @IsOptional()
  @IsBoolean()
  hatchable?: boolean;

  @IsOptional()
  @IsBoolean()
  shiny?: boolean;

  @IsOptional()
  @IsBoolean()
  nest?: boolean;

  @IsOptional()
  @IsBoolean()
  new?: boolean;

  @IsOptional()
  @IsBoolean()
  notGettable?: boolean;

  @IsOptional()
  @IsBoolean()
  futureEvolve?: boolean;
}
