import { Repository } from 'typeorm';


export class TypeOrmMethods_Update {
  constructor(public readonly entityRepository: Repository<any>) {}

  // update with many-to-many relationships
  async updateExist(updateDataDto: any, existRecord: any) {

    this.entityRepository.merge(existRecord, updateDataDto);

    return await this.entityRepository.save(existRecord);
  }
}
