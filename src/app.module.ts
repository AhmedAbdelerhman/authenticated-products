import { Global, MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
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
import { AdminModule } from './admin/admin.module';
import { AdminStaticsService } from './admin/admin-statics.service';
import { NextFunction } from 'express';
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