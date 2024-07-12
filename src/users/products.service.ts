import { JsonService } from '../redFromJSon.service';

import { ApiResponseMsg } from '@app/libs/errors/api-response-msg';
import { PageOptionsDto } from '@app/libs/pagination/pageOption.dto';
import { TypeOrmMethods_Find } from '@app/libs/typeorm/find.orm';
import { ServiceOptions } from '@app/libs/typeorm/serviceOptions.interfaces';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './entities/user.entity';



@Injectable()
export class ProductsService {
  _options: ServiceOptions = {
    repository: this.userRepository,
    limit: 10,
    page: 1,
  };

  constructor(
    @InjectRepository(UserEntity)
    private userRepository: Repository<UserEntity>,
    private jsonService: JsonService

  ) { }



  async findAllProducts(options: PageOptionsDto,filePath:string) {
   
    Object.assign(this._options, options);
    const qBuilder = new TypeOrmMethods_Find(
      this.userRepository,
      this._options,
    );
    const productsArray = await this.jsonService.readData(filePath) as any
    const records = await qBuilder.FindAllPagination(productsArray);
    return ApiResponseMsg.successResponseWithPagination('succuss', records);
  
  }


}
