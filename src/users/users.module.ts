import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEintity } from './entities/user.entity';
import { AuthService } from './auth.service';

@Module({
  imports:[TypeOrmModule.forFeature([UserEintity])],
  controllers: [UsersController],
  providers: [UsersService,AuthService]
})
export class UsersModule {}
