import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { CabeceraPedidoService } from './cabecera-pedido.service';
import { CABECERA_SCHEMA } from './cabecera-pedido.schema';
import { CabeceraPedido } from './cabecera-pedido';
import { CabeceraPedidoPipe } from './cabecera-pedido.pipe';

@Controller('cabecera-pedido')
export class CabeceraPedidoController {

  constructor(
    private readonly _cabeceraService: CabeceraPedidoService,
  ){}

  @Get()
  obtenerTodos(){
    return this._cabeceraService.findAll();
  }

  @Get(':id')
  obtenerUno(@Param('id') id){
    return this._cabeceraService.findById(id);

  }

  @Post()
  @UsePipes(new CabeceraPedidoPipe(CABECERA_SCHEMA))
  insertarCabecera(@Body() cabecera: CabeceraPedido){
    return this._cabeceraService.insert(cabecera);
  }

  @Put(':id')
  actualizarCabecera( @Param('id') id, @Body(new CabeceraPedidoPipe(CABECERA_SCHEMA)) cabecera){
    return this._cabeceraService.update(id, cabecera);
  }

  @Delete(':id')
  eliminarCabecera(@Param('id') id){
    return this._cabeceraService.delete(id);
  }

}
