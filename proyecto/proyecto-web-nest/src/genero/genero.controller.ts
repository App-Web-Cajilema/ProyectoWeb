import { Controller, Get, Param } from '@nestjs/common';
import { GeneroService } from './genero.service';

@Controller('genero')
export class GeneroController {
  constructor(
    private readonly _generoService:GeneroService
  ){}

  @Get()
  obtenerTodos(){
    return this._generoService.findAll();
  }

  @Get(':id')
  obtenerUnoPorId(@Param('id') id){
    return this._generoService.findByGeneroId(id);

  }

  @Get('nombre/:nombre')
  obtenerUnoPorNombre(@Param('nombre') nombre){
     return this._generoService.findByGeneroName(nombre)
  }

  @Get('libro/:id')
  obtenerPorLibro(@Param('id') id){
    return this._generoService.findByLibroId(id);
  }

}
