import { Body, Controller, Get, Param, Put, Req, Res } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioPipe } from './usuario.pipe';
import { USUARIO_SCHEMA } from './usuario.schema';
import { JwtService } from '../json-web-token/jwt.service';
const fs = require('fs');

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly _usuarioService: UsuarioService,
    private readonly _jwtService: JwtService){}

  @Get(':id')
  obtenerUsuario(@Param('id') id){
    return this._usuarioService.findById(id);
  }

  @Put(':id')
  async actualizarUsuario(@Param('id') id, @Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario, @Res() res){
    console.log('Recibiendo', JSON.stringify(usuario));
    if(usuario.imagen !== 'na'){
      const imagenBase64 = usuario.imagen;
      const extension = usuario.extension;
      const nombreArchivo = `${usuario.username}.${extension}`;
      const buffer = Buffer.from(imagenBase64, 'base64');
      fs.writeFile(`src/assets/usuario/${nombreArchivo}`, buffer,  async (error) => {
        if (error){
          console.log(error);
        }else{
          usuario.imagen = undefined;
          usuario.extension = undefined;
          usuario.imagenUrl = `http://localhost:8080/usuario/${nombreArchivo}`;
          const usuarioInsert = await this._usuarioService.editarUsuario(usuario);
          console.log('Enviando', JSON.stringify(usuarioInsert));
          res.send(usuarioInsert);
        }
      });
    }else{
      usuario.imagenUrl = `http://localhost:8080/usuario/${usuario.username}.${usuario.extension}`;
      usuario.imagen = undefined;
      usuario.extension = undefined;
      console.log('Enviando', JSON.stringify(usuario));
      const usuarioInsert = await this._usuarioService.editarUsuario(usuario);
      res.send(usuarioInsert);
    }
  }

  @Get()
  obtenerUsuarioToken(@Req() req){
    const id = this._jwtService.leerToken(req.headers.authorization).data;
    return this._usuarioService.findById(id);
  }

  @Get('comentario/:id')
  obtenerUsuarioPorComentario(@Param('id') id){
    return this._usuarioService.findByComentarioId(id);
  }

}
