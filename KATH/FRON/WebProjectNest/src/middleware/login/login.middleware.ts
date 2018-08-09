import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';
import { PeticionErroreaException } from '../../exception/peticion-errorea/peticion-errorea.exception';
import { NoAutorizadoException } from '../../exception/no-autorizado/no-autorizado.exception';
import { JwtService } from '../../json-web-token/jwt.service';

@Injectable()
export class LoginMiddleware implements NestMiddleware {

  constructor(private readonly _jwtService: JwtService){}
  resolve(context: string): MiddlewareFunction {
    return (req, res, next) => {
      const header_auth = req.headers.authorization;
      if(header_auth){
        this._jwtService.verificarToken(header_auth, (error, decoded) => {
          if (!error) {
            req.user = decoded;
            next();
          }else
            throw new PeticionErroreaException(error);
        });
      }
      else{
        throw new NoAutorizadoException('Necesita hacer login para acceder al contenido');
      }
    };
  }
}
