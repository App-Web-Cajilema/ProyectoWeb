import { Controller, Get, Param, Query } from '@nestjs/common';
import { ComentarioService } from '../comentario/comentario.service';
import { UsuarioTarjetaService } from './usuario-tarjeta.service';

@Controller('usuario-tarjeta')
export class UsuarioTarjetaController {
  constructor(
    private readonly _usuarioTarjetaService: UsuarioTarjetaService,
  ){}

  @Get()
  obtenerPorUsuarioTarjetaId(@Query() query){
    const usuarioId = query.usuarioId;
    const tarjetaId = query.tarjetaId;
    return this._usuarioTarjetaService.obtenerUsuarioTarjeta(usuarioId, tarjetaId);
  }
}
