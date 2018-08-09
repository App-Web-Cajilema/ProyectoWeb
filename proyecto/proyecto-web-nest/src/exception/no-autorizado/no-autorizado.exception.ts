import { HttpException, HttpStatus } from '@nestjs/common';

export class NoAutorizadoException extends HttpException {
  constructor(private readonly _mensaje) {
    super({
        mensaje: 'No está autorizado',
        status: HttpStatus.UNAUTHORIZED,
        detalle: _mensaje,
      },
      HttpStatus.UNAUTHORIZED);
  }
}
