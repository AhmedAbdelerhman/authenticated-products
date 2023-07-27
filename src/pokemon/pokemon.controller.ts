import { CreatePokemonDTO } from './dto/create-pokemon';
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Req,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { UpdatePokemonDTO } from './dto/update-pokemon';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { FilterPokemonDto } from './dto/filter-pokemon.dto';
@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDTO) {
    return this.pokemonService.create(createPokemonDto);
  }

  @Get()
  findAll(
    @Query() pageOptionsDto: PageOptionsDto,
    @Query() filterPokemonDto?: FilterPokemonDto,
  ) {
    console.log('@@@@@@@@@@@@@@@{pageOptionsDto}', pageOptionsDto);
    console.log('@@@@@@@@@@@@@@@{filterPokemonDto}', filterPokemonDto);
    return this.pokemonService.findAll(pageOptionsDto, filterPokemonDto);
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pokemonService.getSingleRecord(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() updatePokemonDto: UpdatePokemonDTO) {
    return this.pokemonService.update(id, updatePokemonDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.pokemonService.remove(id);
  }
}
