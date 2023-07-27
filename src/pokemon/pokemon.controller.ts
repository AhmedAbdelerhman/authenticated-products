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
  ValidationPipe
} from '@nestjs/common';
import { PokemonService } from './pokemon.service';
import { UpdatePokemonDTO } from './dto/update-pokemon';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @UsePipes(ValidationPipe)
  @Post()
  create(@Body() createPokemonDto: CreatePokemonDTO) {
    return this.pokemonService.create(createPokemonDto);
  }

  // findAll(
  //   @Query() pageOptionsDto: PageOptionsDto,
  //   @Query() filterLocationDto?: FilterLocationDto,
  // ) {
  //   return this.pokemonService.findAll(
  //     pageOptionsDto,
  //     filterLocationDto ? { ...filterLocationDto } : {},
  //   );
  // }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pokemonService.findOne(id);
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
