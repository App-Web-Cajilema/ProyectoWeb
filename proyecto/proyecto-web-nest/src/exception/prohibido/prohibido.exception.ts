import { HttpException, HttpStatus } from '@nestjs/common';

export class ProhibidoException extends HttpException {
  constructor(private readonly _mensaje) {
    super({
        mensaje: 'Contenido restringido',
        status: HttpStatus.FORBIDDEN,
        detalle: _mensaje,
      },
      HttpStatus.FORBIDDEN);
  }
}
