import { IsBoolean, IsNumber, IsString, IsOptional } from 'class-validator';

export class UpdatePokemonDTO {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsNumber()
  pokedexNumber?: number;

  @IsOptional()
  @IsNumber()
  imgName?: number;

  @IsOptional()
  @IsNumber()
  generation?: number;

  @IsOptional()
  @IsString()
  evolutionStage?: string;

  @IsOptional()
  @IsBoolean()
  evolved?: boolean;

  @IsOptional()
  @IsNumber()
  familyID?: number;

  @IsOptional()
  @IsBoolean()
  crossGen?: boolean;

  @IsOptional()
  @IsString()
  type1?: string;

  @IsOptional()
  @IsString()
  type2?: string | null;

  @IsOptional()
  @IsString()
  weather1?: string;

  @IsOptional()
  @IsString()
  weather2?: string | null;

  @IsOptional()
  @IsNumber()
  statTotal?: number;

  @IsOptional()
  @IsNumber()
  ATK?: number;

  @IsOptional()
  @IsNumber()
  DEF?: number;

  @IsOptional()
  @IsNumber()
  STA?: number;

  @IsOptional()
  @IsBoolean()
  legendary?: boolean;

  @IsOptional()
  @IsBoolean()
  acquirable?: boolean;

  @IsOptional()
  @IsBoolean()
  spawns?: boolean;

  @IsOptional()
  @IsBoolean()
  regional?: boolean;

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

  @IsOptional()
  @IsNumber()
  cpAt40?: number;

  @IsOptional()
  @IsNumber()
  cpAt39?: number;
}
