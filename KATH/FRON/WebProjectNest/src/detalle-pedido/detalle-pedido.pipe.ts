import { PeticionErroreaException } from '../exception/peticion-errorea/peticion-errorea.exception';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import * as Joi from 'joi';

@Injectable()
export class DetallePedidoPipe implements PipeTransform<any>{
  constructor (private readonly _detalleSchema){}
  transform(value: any, metadata: ArgumentMetadata): any {
    const {error} = Joi.validate(value,this._detalleSchema);
    if(error){
      throw new PeticionErroreaException(error);

    }

    return value;
  }


}