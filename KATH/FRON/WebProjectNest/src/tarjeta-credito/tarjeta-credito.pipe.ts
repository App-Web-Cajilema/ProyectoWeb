import { PeticionErroreaException } from '../exception/peticion-errorea/peticion-errorea.exception';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class TarjetaCreditoPipe implements PipeTransform<any>{
  constructor (private readonly _tarjetaSchema){}
  transform(value: any, metadata: ArgumentMetadata): any {
    const {error} = Joi.validate(value,this._tarjetaSchema);
    if(error){
      throw new PeticionErroreaException(error);

    }

    return value;
  }


}