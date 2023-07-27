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
          const pokemon = new PokemonEntity();
          Object.assign(pokemon, row);

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
