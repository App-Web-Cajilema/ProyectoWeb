import { Controller, Get, Param } from '@nestjs/common';
import { EditorialService } from './editorial.service';

@Controller('editorial')
export class EditorialController {

  constructor(
    private readonly _editorialService:EditorialService
  ){}

  @Get()
  obtenerTodos(){
    return this._editorialService.findAll();
  }

  @Get(':id')
  obtenerUnoPorId(@Param('id') id){
    return this._editorialService.findByEditorialId(id);

  }

  @Get('nombre/:nombre')
  obtenerUnoPorNombre(@Param('nombre') nombre){
    return this._editorialService.findByEditorialName(nombre);
  }
  @Get('libro/:id')
  obtenerPorLibro(@Param('id') id){
    return this._editorialService.findByLibroId(id);
  }
}
