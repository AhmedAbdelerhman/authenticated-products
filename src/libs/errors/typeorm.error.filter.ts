import {
  PipeTransform,
  Injectable,
  ArgumentMetadata,
  UseFilters,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';
import { HttpExceptionFilter } from '@app/libs/errors/http-exception.filter';

@Injectable()
@UseFilters(new HttpExceptionFilter())
export class CustomValidationPipe implements PipeTransform {
  constructor(options?: any) {}

  async transform(value: any, { metatype }: ArgumentMetadata): Promise<any> {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }

    let object = plainToClass(metatype, value);
    let errors = await validate(object);
    const errorsObject = {};
    let errorMsgs = [];

    if (errors.length > 0) {
      const errorsResponse: any = errors.map(async (val: any) => {
        if (val.children.length === 0) {
          for (const key of Object.keys(val.constraints)) {
            errorMsgs.push(val.constraints[key]);
          }
          errorsObject[val.property] = errorMsgs;
          errorMsgs = [];
        } else {
          for (const child of val.children) {
            errorsObject[val.property] = {};
            for (const nestedChild of child.children) {
              for (const key of Object.keys(nestedChild.constraints)) {
                if (key == 'isNotEmpty')
                  errorMsgs.push(
                    'The ' + nestedChild.property + ' field is required.',
                  );
                else errorMsgs.push(nestedChild.constraints[key]);
              }
              errorsObject[val.property][nestedChild.property] = errorMsgs;

              errorMsgs = [];
            }
          }
        }
      });

      throw new HttpException(
        {
          message: 'Have ' + errors.length + ' error(s)',
          ...errorsObject,
          isDtoErrors: true,
        },
        HttpStatus.UNPROCESSABLE_ENTITY,
      );
    }

    return value;
  }
  protected toValidate(metatype: any): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}
