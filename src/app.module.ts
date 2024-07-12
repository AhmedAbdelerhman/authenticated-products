import { Global, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ormOptions } from './ormconfig';

import { APP_GUARD } from '@nestjs/core';
import { ScheduleModule } from '@nestjs/schedule';
import { ServeStaticModule } from '@nestjs/serve-static';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { join } from 'path';
import { SchedulerModule } from './libs/Scheduler/scheduler.module';
import { JsonService } from './redFromJSon.service';
import { AuthModule } from './users/user.module';
@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot(      {
      rootPath: join(__dirname, '..', 'public'),
      serveRoot: '/*',
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