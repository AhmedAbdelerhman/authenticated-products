import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { UserEntity } from '@app/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([UserEntity])],
    providers: [SchedulerService]
})
export class SchedulerModule {}
