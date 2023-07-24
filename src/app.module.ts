import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormOptions } from "@app/ormconfig";
import { PokemonModule } from './pokemon/pokemon.module';

console.log(ormOptions);
@Module({
  imports: [TypeOrmModule.forRoot(ormOptions), PokemonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
