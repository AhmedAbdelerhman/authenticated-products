import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { PokemonEntity } from './pokemon/entities/pokemon.entity';

config();
const configService = new ConfigService();

export let ormOptions: any = {
  type: 'mssql',
  database: configService.get('DB_NAME'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  entities: [`${__dirname}/**/*.entity{.js,.ts}`],
  subscriber: [`${__dirname}/**/subscriber/*.subscriber{.js,.ts}`],
  options: { trustServerCertificate: true },
  logging: configService.get('logging')==="true",
  synchronize: configService.get('synchronize')  === "true" ,
};

const source = new DataSource(ormOptions);

export default source;
