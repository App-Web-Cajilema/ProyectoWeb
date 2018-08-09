import * as Joi from 'joi';
import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
import { PeticionErroreaException } from '../exception/peticion-errorea/peticion-errorea.exception';

@Injectable()
export class CabeceraPedidoPipe implements PipeTransform<any>{
  constructor (private readonly _cabeceraSchema){}
  transform(value: any, metadata: ArgumentMetadata): any {
    const {error} = Joi.validate(value,this._cabeceraSchema);
    if(error){
      throw new PeticionErroreaException(error);

    }

    return value;
  }


}