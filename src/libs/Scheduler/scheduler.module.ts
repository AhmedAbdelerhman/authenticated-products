import { Module } from '@nestjs/common';
import { SchedulerService } from './scheduler.service';
import { UserEintity } from '@app/users/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
    imports: [TypeOrmModule.forFeature([UserEintity])],
    providers: [SchedulerService]
})
export class SchedulerModule {}
