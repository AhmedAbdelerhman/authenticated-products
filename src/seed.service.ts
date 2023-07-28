import { Connection, Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';
import { parseExcelToJsObject } from './util/parseExcelToJsObject';
import { PokemonEntity } from './pokemon/entities/pokemon.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class SeedService {
  constructor(
    private connection: Connection,
    @InjectRepository(PokemonEntity)
    private pokemonRepository: Repository<PokemonEntity>,
  ) {}

  async seedFromExcel(filePath: string) {
    const data = await parseExcelToJsObject(filePath);
    const count = await this.pokemonRepository.count();

    //  don't seed if the database has already data (seed in only in first create database container)
    if (!count) {
      this.pokemonRepository.clear();
      console.log("start seeding");
      await this.connection.transaction(async (manager) => {
        for (const row of data) {
          const pokemon = new PokemonEntity() as any
          Object.assign(pokemon, row);
          // there are table in excel sheet store as 1, 0 we convert it to boolean before store it 
          pokemon.legendary =  pokemon.legendary  == 1 && true 
          pokemon.regional =  pokemon.regional  == 1 && true 
          pokemon.shiny =  pokemon.shiny  == 1 && true 
          pokemon.new =  pokemon.new  == 1 && true 
          pokemon.evolutionStage = pokemon.evolutionStage +""
          await manager.save(pokemon);
        }
      });

      console.log('Database seeding completed.');
    } else {
      console.log('Database has already data');
    }
  }
}

