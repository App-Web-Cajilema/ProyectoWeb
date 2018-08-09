import { Injectable } from '@nestjs/common';
import { Usuario } from '../usuario/usuario';
import { InsertResult, Repository } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class RegistroService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ){}

  async insertar(usuario: Usuario): Promise<InsertResult>{

    const usuarioInsert = this._usuarioRepository.create({
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      username: usuario.username,
      correo: usuario.correo,
      contrasenia: usuario.contrasenia,
      imagenUrl: usuario.imagenUrl,
    });

    return await this._usuarioRepository.insert(usuarioInsert);
  }

  async findByUsername(username: string): Promise<UsuarioEntity>{
    return await this._usuarioRepository.findOne({username});
  }
}
