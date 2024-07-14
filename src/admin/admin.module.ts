import { Global, Module } from '@nestjs/common';
import { AdminAuthController } from './admin-auth.controller';
import { AuthAdminService } from './admin-auth.service';
import { AdminStaticsController } from './admin-staticscontroller';
import { AdminStaticsService } from './admin-statics.service';
import { UserEntity } from '@app/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
@Global()
@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [AdminAuthController ,AdminStaticsController],
  providers: [AuthAdminService, AdminStaticsService], 
  exports:[AdminStaticsService]
})
export class AdminModule {}
