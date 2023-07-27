import { ApiResponseMsg } from '../errors/api-response-msg';
import { IsNull, Not, Repository } from 'typeorm';
import { ServiceOptions } from './serviceOptions.interfaces';

export class TypeOrmMethods_Delete {
  constructor(
    public readonly entityRepository: Repository<any>,
    public serviceOptions: ServiceOptions,
  ) {}

  // soft delete a record
  async softDelete(id: any) {
    // check record first
    const record = await this.entityRepository.findOne({
      where: {
        id,
        deleted_at: IsNull(),
      },
    });

    if (record) {
      await this.entityRepository.delete(id);
      // return success message
      return ApiResponseMsg.successResponse('deleted successfully');
    } else {
      // return not found message
      return ApiResponseMsg.notFoundResponse('not found');
    }
  }


}
