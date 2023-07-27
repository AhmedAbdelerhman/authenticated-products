import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
} from '@nestjs/common';
import { isArray } from 'class-validator';
import { Response } from 'express';
import {
  getI18nContextFromArgumentsHost,
  I18nValidationException,
} from 'nestjs-i18n';
import { formatI18nErrors } from 'nestjs-i18n/dist/utils/util';

let i18n;
@Catch(HttpException)
export class I18nValidationExceptionFilters implements ExceptionFilter {
  async catch(exception: I18nValidationException, host: ArgumentsHost) {
    let errorMessage = {
      message: null,
      errors: null,
      errorsObject: null,
    };

    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const status = exception.getStatus();

    if (exception['response'].noDto) {
      const message = exception.message;
      delete exception['response'].message;
      delete exception['response']['noDto'];
      errorMessage = {
        message: message,
        errors: exception['response']['errors'],
        errorsObject: exception['response'],
      };
    } else if (isArray(exception.errors)) {
      i18n = getI18nContextFromArgumentsHost(host);
      const errors = formatI18nErrors(exception.errors, i18n.service, {
        lang: i18n.lang,
      });
      delete errors['errorMessage']
      errorMessage = await this.refineDtoErrors({ errors });
    } else {
      const message = exception.message;
      delete exception['response'].message;
      errorMessage = {
        message: message,
        errors:null,
        errorsObject: null,
      };
    }

    response.status(status).json({
      statusCode: status,
      message: errorMessage.message,
      errors: errorMessage.errorsObject,
      timestamp: new Date().toISOString(),
    });
  }

  async refineDtoErrors({
    errors,
  }: {
    errors: any;
  }): Promise<{ message: any; errors:any, errorsObject: {} }> {
    const errorsObject = {};
    let errorMsgs = [];
    if (errors.length > 0) {
      const errorsResponse: any = errors.map(async (val: any) => {
        if (
          (val.property === 'translations' ||
            val.property === 'arrayOfObjects') &&
          val.children.length > 0
        ) {
          val.children.forEach((translationItems: []) => {
            const nestedError = {};
            for (const key of Object.keys(translationItems['children'])) {
              nestedError[translationItems['children'][key]['property']] = [];
              for (const keyNested of Object.keys(
                translationItems['children'][key]['constraints'],
              )) {
                nestedError[translationItems['children'][key]['property']].push(
                  translationItems['children'][key]['constraints'][keyNested],
                );
              }
            }
            errorsObject[val.property] = nestedError;
            errorMsgs = [];
          });
        } else {
          for (const key of Object.keys(val.constraints)) {
            errorMsgs.push(val.constraints[key]);
          }
          errorsObject[val.property] = errorMsgs;
          errorMsgs = [];
        }
      });
    }

    return {
      message: i18n.translate('validations.ERROR_MSG', {
        args: { count: errors.length },
        lang: i18n.lang,
      }),
      errors: null,
      errorsObject: errorsObject,
    };
  }
}
