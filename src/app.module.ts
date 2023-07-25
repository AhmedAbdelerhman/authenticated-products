import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormOptions } from '@app/ormconfig';
import { PokemonModule } from './pokemon/pokemon.module';
import { PokemonEntity } from './pokemon/entities/pokemon.entity';

console.log(ormOptions);
@Module({
  imports: [
    TypeOrmModule.forRoot(ormOptions),

    TypeOrmModule.forFeature([PokemonEntity]),

    PokemonModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
