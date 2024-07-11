import { Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AuthAdminService } from './admin-auth.service';

@Module({
  controllers: [AdminAuthController ],
  providers: [AuthAdminService]
})
export class AdminModule {}
