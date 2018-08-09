import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioEntity } from './usuario.entity';
import { InsertResult, Repository } from 'typeorm';
import { Usuario } from './usuario';
import { EditorialEntity } from '../editorial/editorial.entity';
import { take } from 'rxjs/internal/operators';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(UsuarioEntity)
    private readonly _usuarioRepository: Repository<UsuarioEntity>,
  ){}


  async findById(id: string): Promise<UsuarioEntity>{
    return await this._usuarioRepository.findOne(id);
  }



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

  async editarUsuario(usuario: Usuario): Promise<UsuarioEntity>{
    return await this._usuarioRepository.save(usuario);
  }

  async findByUsername(username: string): Promise<UsuarioEntity>{
    return await this._usuarioRepository.findOne({username});
  }

  async findByComentarioId(id: string): Promise<UsuarioEntity>{
    return this._usuarioRepository.createQueryBuilder('usuario')
      .innerJoin('usuario.comentarios', 'comentario')
      .where('comentario.id = :id', {id})
      .getOne();
  }
}
