import { Body, Controller, HttpCode, NotFoundException, Post, Res, UsePipes } from '@nestjs/common';
import { LoginPipe } from './login.pipe';
import { LOGIN_SCHEMA } from './login.schema';
import { Login } from './login';
import { LoginService } from './login.service';
import { NoEncontradoException } from '../exception/no-encontrado/no-encontrado.exception';
import { JwtService } from '../json-web-token/jwt.service';

@Controller('login')
export class LoginController {
  constructor(
    private readonly _loginService: LoginService,
    private readonly _jwtService: JwtService,
  ){}

  @Post()
  @HttpCode(200)
  async login(@Body(new LoginPipe(LOGIN_SCHEMA)) login: Login){
    const usuario = await this._loginService.findForLogin(login.username, login.contrasenia);
    if (usuario){
      const jwt = this._jwtService.emitirToken(usuario.id);
      return `{ "jwt": { "token": "${jwt}"}, "usuario":${JSON.stringify(usuario)}}`;
    }
    throw new NoEncontradoException('Something went wrong. Please, try again.');
  }
}
