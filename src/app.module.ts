import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import  { ormOptions } from '@app/ormconfig';

import { Connection } from 'typeorm';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      ...ormOptions,
    }),

    UsersModule,
  ],
  providers: [SeedService],
})
export class AppModule {
  // constructor(
  //   private connection: Connection,
  //   private seedService: SeedService,
  // ) {
  //   // Call the seed function after the database connection is established
  //   this.seedData();
  // }

  // async seedData() {
  //   try {
  //     await this.seedService.seedFromExcel('./Pokemon_Go.xlsx');
  //   } catch (error) {
  //     console.error('Database seeding failed need to migrate:', error.message);
  //     // run migrate for first time run db container 
  //   }
  
  // }


}