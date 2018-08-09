import { Body, Controller, HttpCode, Post, Res } from '@nestjs/common';
import { UsuarioService } from '../usuario/usuario.service';
import { UsuarioPipe } from '../usuario/usuario.pipe';
import { USUARIO_SCHEMA } from '../usuario/usuario.schema';
import { RegistroService } from './registro.service';
import { JwtService } from '../json-web-token/jwt.service';

const fs = require('fs');

@Controller('registro')
export class RegistroController {
  constructor(
    private readonly _registroService: RegistroService,
    private readonly _jwtService: JwtService,
  ){}

  @Post()
  @HttpCode(200)
  registrarUsuario(@Body(new UsuarioPipe(USUARIO_SCHEMA)) usuario, @Res() res){
    const imagenBase64 = usuario.imagen;
    const extension = usuario.extension;
    const nombreArchivo = `${usuario.username}.${usuario.extension}`;
    const buffer = Buffer.from(imagenBase64, 'base64');
    fs.writeFile(`src/assets/usuario/${nombreArchivo}`, buffer,  async (error) => {
      if (error){
        console.log(error);
      }else{
        usuario.imagen = undefined;
        usuario.extension = undefined;
        usuario.imagenUrl = `http://localhost:8080/usuario/${nombreArchivo}`;
        const usuarioId = await this._registroService.insertar(usuario);
        usuario.id = usuarioId.identifiers[0].id;
        const jwt = this._jwtService.emitirToken(usuario.id);
        res.send(`{ "jwt": { "token": "${jwt}"}, "usuario":${JSON.stringify(usuario)}}`);
      }
    });
  }
}
