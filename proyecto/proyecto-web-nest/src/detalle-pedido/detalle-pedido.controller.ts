import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { DetallePedidoService } from './detalle-pedido.service';
import { DetallePedidoPipe } from './detalle-pedido.pipe';
import { DETALLE_SCHEMA } from './detalle-pedido.schema';
import { DetallePedido } from './detalle-pedido';

@Controller('detalle-pedido')
export class DetallePedidoController {

  constructor(
    private readonly _detalleService:DetallePedidoService
  ){}

  @Get()
  obtenerTodos(){
    return this._detalleService.findAll();
  }

  @Get(':id')
  obtenerUno(@Param('id') id){
    return this._detalleService.findByCabeceraId(id);

  }

  @Post()
  @UsePipes(new DetallePedidoPipe(DETALLE_SCHEMA))
  insertarDetalle(@Body() detalle: DetallePedido){
    return this._detalleService.insert(detalle);
  }

  @Put(':id')
  actualizarDetalle( @Param('id') id, @Body(new DetallePedidoPipe(DETALLE_SCHEMA)) detalle){
    return this._detalleService.update(id, detalle);
  }

  @Delete(':id')
  eliminarDetalle(@Param('id') id){
    return this._detalleService.delete(id);
  }


}
