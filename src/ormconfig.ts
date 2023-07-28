import { DataSource } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';

config();
const configService = new ConfigService();

export let ormOptions: any = {
  type: 'mssql',
  // note we cant make migration for database name that not exist 
  // so if we and to migrate database we have to connect and  create it by ourselves in gui tool or commend line
  // in our case mssql image comes with default db we create the schema inside it 
  // to make the app run with just docker compose up
  // database: configService.get('DB_NAME'),
  username: configService.get('DB_USERNAME'),
  password: configService.get('DB_PASSWORD'),
  host: configService.get('DB_HOST'),
  port: +configService.get('DB_PORT'),
  entities: [`${__dirname}/**/*.entity{.js,.ts}`],
  subscriber: [`${__dirname}/**/subscriber/*.subscriber{.js,.ts}`],
  options: { trustServerCertificate: true },
  logging: configService.get('logging') === 'true',
  migrations: [`${__dirname}/database/migrations/*{.js,.ts}`],
  // synchronize: configService.get('synchronize') === 'true',
};
const source = new DataSource(ormOptions);
export default source;
