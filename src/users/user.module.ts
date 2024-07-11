import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './entities/user.entity';
import { AuthService } from './auth.service';
import { UserSubscriber } from './subscriber/user.subscriber';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEntity])],
  controllers: [AuthController ,ProductsController],
  providers: [ProductsService,AuthService ,UserSubscriber]
})
export class AuthModule {}
