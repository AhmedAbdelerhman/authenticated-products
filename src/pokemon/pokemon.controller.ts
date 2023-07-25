import { CreatePokemonDTO } from './dto/create-pokemon';
import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  Req,
} from '@nestjs/common';

@Controller('pokemon')
export class PokemonController {
  @Post('add')
  async create(@Req() _req: any, @Body() pokemonDTO: CreatePokemonDTO) {
    console.log('@@@@@@@@@@@@ ${createJockeyDto}', pokemonDTO);
  }

  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: string,
    @Req() _req: any,
    @Body()
    updateJockeyDto: any,
  ) {
  }
}
