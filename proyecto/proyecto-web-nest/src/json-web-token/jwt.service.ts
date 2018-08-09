import { Injectable } from '@nestjs/common';

const jwtPaquete = require('jsonwebtoken');

@Injectable()
export class JwtService {
  private readonly _secreto = 'smartbook';
  private readonly _jwt = jwtPaquete;
  private readonly _tiempoVidaToken = '2 days';

  emitirToken(payload: any){
    return this._jwt.sign({
      data: payload,
      }, this._secreto, { expiresIn: this._tiempoVidaToken });
  }

  verificarToken(token: string, callback){
      this._jwt.verify(token, this._secreto, callback);
  }

  leerToken(token: string) {
    return this._jwt.decode(token, {json: true});
  }

}
