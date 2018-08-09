import { PipeTransform, Pipe, ArgumentMetadata, Injectable } from '@nestjs/common';
import * as Joi from 'joi';
import { PeticionErroreaException } from '../exception/peticion-errorea/peticion-errorea.exception';

@Injectable()
export class UsuarioPipe implements PipeTransform<any> {
  constructor(private readonly _usuarioSchema){}

  transform(value: any, metadata: ArgumentMetadata) {
    const {error} = Joi.validate(value, this._usuarioSchema);
    if (error){
      throw new PeticionErroreaException(error);
    }
    return value;

  }
}
