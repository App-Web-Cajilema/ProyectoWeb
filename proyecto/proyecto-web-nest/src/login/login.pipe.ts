import { PipeTransform, ArgumentMetadata, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { PeticionErroreaException } from '../exception/peticion-errorea/peticion-errorea.exception';

@Injectable()
export class LoginPipe implements PipeTransform<any> {
  constructor(private readonly _loginSchema) {
  }

  transform(value: any, metadata: ArgumentMetadata) {
    const { error } = Joi.validate(value, this._loginSchema);
    if (error) {
      throw new PeticionErroreaException(error);
    }
    return value;
  }
}