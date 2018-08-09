import { Body, Controller, Delete, Get, Param, Post, Put, Req, UsePipes } from '@nestjs/common';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoPipe } from './tarjeta-credito.pipe';
import { TARJETA_SCHEMA } from './tarjeta-credito.schema';
import { TarjetaCredito } from './tarjeta-credito';

@Controller('tarjeta-credito')
export class TarjetaCreditoController {

  constructor(
    private readonly _tarjetaService: TarjetaCreditoService,
  ){}

  @Get()
  obtenerTarjetas(@Req() req){
    const id = req.user.data;
    return this._tarjetaService.findByUserId(id);
  }

  @Post()
  insertarTarjeta(@Body(new TarjetaCreditoPipe(TARJETA_SCHEMA)) tarjeta, @Req() req){
    console.log(tarjeta);
    const id = req.user.data;
    return this._tarjetaService.insert(id, tarjeta);
  }

  @Put(':id')
  actualizarTarjeta(@Body(new TarjetaCreditoPipe(TARJETA_SCHEMA)) tarjeta, @Req() req){
    const id = req.user.data;
    return this._tarjetaService.update(tarjeta);
  }

  @Delete(':id')
  eliminarTarjeta(@Param('id') id, @Req() req){
    const id_usuario = req.user.data;
    return this._tarjetaService.delete(id_usuario, id);
  }
}
