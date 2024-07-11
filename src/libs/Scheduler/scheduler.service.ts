import { Injectable, Logger } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Cron, CronExpression } from '@nestjs/schedule';
import { UserEntity } from '@app/users/entities/user.entity';

@Injectable()
export class SchedulerService {
  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  async deleteUsers() {
    await this.userRepository.clear();
    Logger.getTimestamp();
    Logger.warn('All users have been deleted');
  }
}
