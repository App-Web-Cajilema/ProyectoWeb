import { Controller, Get, Param, Query } from '@nestjs/common';
import { LibroService } from './libro.service';
import { isEmpty } from '@nestjs/common/utils/shared.utils';



@Controller('libro')
export class LibroController {
  constructor(
    private readonly _libroService: LibroService,
  ){}

  @Get()
  obtenerTodos(@Query() param){
    if (Object.keys(param).length !== 0){
      return this._libroService.findLike(param.nombre);
    }else{
      return this._libroService.findAll();
    }
  }

  @Get(':id')
  obtenerUnoPorId(@Param('id') id){
    return this._libroService.findByLibroId(id);

  }

  @Get('/nombre/:nombre')
  obtenerUnoPorNombre(@Param('nombre') nombre){
    return this._libroService.findByLibroName(nombre);
  }

}
