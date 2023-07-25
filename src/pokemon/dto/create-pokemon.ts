import { IsBoolean, IsNumber, IsString, IsOptional , } from 'class-validator';

export class CreatePokemonDTO {

  @IsString()
  name: string;

  @IsNumber()
  pokedexNumber: number;

  @IsString()
  imgName: string;

  @IsNumber()
  generation: number;

  @IsString()
  evolutionStage: string;

  @IsBoolean()
  evolved: boolean;

  @IsNumber()
  familyID: number;

  @IsBoolean()
  crossGen: boolean;

  @IsString()
  type1: string;

  @IsString()
  @IsOptional()
  type2: string | null;

  @IsString()
  weather1: string;

  @IsString()
  @IsOptional()
  weather2: string | null;

  @IsNumber()
  statTotal: number;

  @IsNumber()
  ATK: number;

  @IsNumber()
  DEF: number;

  @IsNumber()
  STA: number;

  @IsBoolean()
  legendary: boolean;

  @IsBoolean()
  acquirable: boolean;

  @IsBoolean()
  spawns: boolean;

  @IsBoolean()
  regional: boolean;

  @IsBoolean()
  raidable: boolean;

  @IsBoolean()
  hatchable: boolean;

  @IsBoolean()
  shiny: boolean;

  @IsBoolean()
  nest: boolean;

  @IsBoolean()
  new: boolean;

  @IsBoolean()
  notGettable: boolean;

  @IsBoolean()
  futureEvolve: boolean;

  @IsNumber()
  cpAt40: number;

  @IsNumber()
  cpAt39: number;
}
