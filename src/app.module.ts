import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import source, { ormOptions } from '@app/ormconfig';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonEntity } from './pokemon/entities/pokemon.entity';
import { Connection } from 'typeorm';
import { ConfigService } from '@nestjs/config';

delete ormOptions.database;
console.log(ormOptions);
@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormOptions,
    }),

    TypeOrmModule.forFeature([PokemonEntity]),

    PokemonModule,
  ],
  providers: [SeedService],
})
export class AppModule {
  constructor(
    private connection: Connection,
    private seedService: SeedService,
  ) {
    this.seedData();
    // Call the seed function after the database connection is established
  }

  async seedData() {
    try {
      await this.seedService.seedFromExcel('./Pokemon_Go.xlsx');
    } catch (error) {
      console.error('Database seeding failed:', error.message);
    }
  }
  async createDataBaseIfNotExist(connection: any) {
    try {
      const databases = await connection.query(
        "SELECT * FROM sys.databases WHERE name = 'pokemon';",
      );
      if (!databases.length) {
        const createdDb = await this.connection.query(
          'CREATE DATABASE pokemon;',
        );
      }
    } catch (error) {
      console.log('@@@@@@@@@@@@@@@{error}', error);
    }
  }
}
