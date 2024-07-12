import { ormOptions } from './ormconfig';
import { Module, Global, NestModule, MiddlewareConsumer } from '@nestjs/common';
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
import { AdminModule } from './admin/admin.module';
import { NextFunction } from 'express';
import { AdminStaticsService } from './admin/admin-statics.service';
@Global()
@Module({
  imports: [
    ServeStaticModule.forRoot(
      {
        rootPath: join(__dirname, '..', 'public'),
        serveRoot: '/admin',
        serveStaticOptions: {
          index: "welcome-admin.html"
        }
      },
      {
        rootPath: join(__dirname, '..', 'public'),
        serveRoot: '/*',

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
    AuthModule,
    AdminModule
  ],
  providers: [{
    provide: APP_GUARD,
    useClass: ThrottlerGuard,
  },
    JsonService],
  exports: [JsonService]
})
export class AppModule  implements NestModule {
  constructor(private readonly adminStaticsService: AdminStaticsService) {}
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req: Request, res: Response, next: NextFunction
      ) => {
        if (!req.headers["referer"]?.includes("admin")) {
          this.adminStaticsService.incrementCounterRequest();
        }
        next();
      })
      .forRoutes("*");
  }
}