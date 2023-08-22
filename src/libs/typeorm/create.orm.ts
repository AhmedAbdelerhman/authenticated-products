import { Repository } from 'typeorm';
import { ApiResponseMsg } from '../errors/api-response-msg';
import { HttpStatus } from '@nestjs/common';

export class TypeOrmMethods_Create {
  private id;
  constructor(
    public readonly entityRepository: Repository<any>,
  ) {}

  async addNew(data: any, dto: any) {
    try {
          // create and save new record
    const newItem = new dto();
    Object.assign(newItem, data);
    // create instance from the inserted entity
    const itemObject = this.entityRepository.create(newItem);
    // save the instance of the entity
    const addedItem = await this.entityRepository.save(itemObject);
    // failed to create
    if (!addedItem) {
      return ApiResponseMsg.errorResponse(
        'failed',
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }



    return addedItem;
      
    } catch (error) {
      console.log('@@@@@@@@@@@@@@@{error}',error);
    }

  }


}
