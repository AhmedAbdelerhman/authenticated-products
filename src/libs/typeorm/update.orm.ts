import { Repository } from 'typeorm';

import source from '@app/ormconfig';
import { ApiResponseMsg } from '../errors/api-response-msg';
import { HttpStatus } from '@nestjs/common';

import { ServiceOptions } from './serviceOptions.interfaces';

export class TypeOrmMethods_Update {
  constructor(public readonly entityRepository: Repository<any>) {}

  // update with many-to-many relationships
  async updateExist(updateDataDto: any, existRecord: any) {
    console.log('@@@@@@@@@@@@@@@{existRecord}', existRecord);

    this.entityRepository.merge(existRecord, updateDataDto);
    console.log('@@@@@@@@@@@@@@@{existRecord}', existRecord);

    return await this.entityRepository.save(existRecord);
  }
}
