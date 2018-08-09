import { Injectable, NestMiddleware, MiddlewareFunction } from '@nestjs/common';

@Injectable()
export class CorsMiddleware implements NestMiddleware {

  constructor(){}

  resolve(context: string): MiddlewareFunction {
    return (req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      next();
    };
  }
}
