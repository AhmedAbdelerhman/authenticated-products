import { ormOptions } from './ormconfig';
import { Module, Global } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Connection } from 'typeorm';
import { AuthModule } from './users/user.module';
import { JsonService } from './redFromJSon.service';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { SchedulerModule } from './libs/Scheduler/scheduler.module';
import { ScheduleModule } from '@nestjs/schedule';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';
@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot(      {
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/',
      renderPath: '/index.html',
    },),
    TypeOrmModule.forRoot({
      ...ormOptions,
    }),

    ThrottlerModule.forRoot([{
      ttl: 60,
      limit: 5,
    }]),
    ScheduleModule.forRoot(),  // Initialize the ScheduleModule here
    SchedulerModule,
    AuthModule,],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
    JsonService],
  exports: [JsonService]
})
export class AppModule {


}