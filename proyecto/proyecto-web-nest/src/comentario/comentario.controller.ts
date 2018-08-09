import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes } from '@nestjs/common';
import { ComentarioService } from './comentario.service';
import { ComentarioPipe } from './comentario.pipe';
import { COMENTARIO_SCHEMA } from './comentario.schema';
import { Comentario } from './comentario';

@Controller('comentario')
export class ComentarioController {
  constructor(
    private readonly _comentarioService: ComentarioService,
  ){}

  @Get()
  obtenerTodos(){
    return this._comentarioService.findAll();
  }

  @Get(':id')
  obtenerUno(@Param('id') id){
    return this._comentarioService.findByLibroId(id);

  }

  @Post()
  @UsePipes(new ComentarioPipe(COMENTARIO_SCHEMA))
  insertarComentario(@Body() comentario: Comentario){
    return this._comentarioService.insert(comentario);
  }

  @Put(':id')
  actualizarComentario( @Param('id') id, @Body(new ComentarioPipe(COMENTARIO_SCHEMA)) comentario){
    return this._comentarioService.update(id, comentario);
  }

  @Delete(':id')
  eliminarComentario(@Param('id') id){
    return this._comentarioService.delete(id);
  }

  @Get('libro/:id')
  obtenerComentarios(@Param('id') id){
    return this._comentarioService.findByLibroIdArr(id);
  }

  @Get('libro/usuario/:id')
  obtenerUsuarioComentario(@Param('id') id){
    return this._comentarioService.findUsuarioByLibroComentario(id);
  }
}
