import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { TypeOrmMethods_Find } from '@app/libs/typeorm/find.orm';
import { ServiceOptions } from '@app/libs/typeorm/serviceOptions.interfaces';
import { UserEntity } from '@app/users/entities/user.entity';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class AdminStaticsService {
    _options: ServiceOptions = {
        repository: this.userRepository,
        limit: 10,
        page: 1,
    };
    constructor(
        @InjectRepository(UserEntity)
        private userRepository: Repository<UserEntity>,

    ) { }

    private counter = 0;

    incrementCounterRequest(): void {
      this.counter++;
    }
  
  private  getCounterRequest(): number {
      return this.counter;
    }
    async adminStatics(options: PageOptionsDto) {

        Object.assign(this._options, options);
        const qBuilder = new TypeOrmMethods_Find(
            this.userRepository,
            this._options,
        );
        const records = await qBuilder.FindAllPaginationUsers({});
        
          records.meta.totalRequest=this.getCounterRequest()
        return ApiResponseMsg.successResponseWithPagination('succuss', records);
    }



}
