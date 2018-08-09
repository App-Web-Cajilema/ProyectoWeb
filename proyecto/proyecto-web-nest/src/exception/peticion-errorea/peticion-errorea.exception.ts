import { HttpException, HttpStatus } from '@nestjs/common';

export class PeticionErroreaException extends HttpException {
  constructor(private readonly _mensaje) {
    super({
        mensaje: 'Petición errónea',
        status: HttpStatus.BAD_REQUEST,
        detalle: _mensaje,
      },
      HttpStatus.BAD_REQUEST);
  }
}
