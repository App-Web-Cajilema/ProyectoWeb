import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ComentarioEntity } from './comentario.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { Comentario } from './comentario';
import { EditorialEntity } from '../editorial/editorial.entity';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { LibroEntity } from '../libro/libro.entity';

@Injectable()
export class ComentarioService {
  constructor(
    @InjectRepository(ComentarioEntity)
    private readonly _comentarioRepository: Repository<ComentarioEntity>,
  ) {}

  async findAll(): Promise<ComentarioEntity[]>{
    return await this._comentarioRepository.find();
  }

  async findByLibroId(id: string): Promise<ComentarioEntity>{
    return await this._comentarioRepository.findOne(id);
  }

  async insert(comentario: Comentario): Promise<InsertResult>{
    return await this._comentarioRepository.insert(comentario);
  }

  async update(id: string, comentario: Comentario): Promise<UpdateResult>{
    return await this._comentarioRepository.update(id, comentario);
  }

  async delete(id: string){
    return await this._comentarioRepository.delete(id);
  }

  async findByLibroIdArr(id: string): Promise<ComentarioEntity[]>{
    return this._comentarioRepository.createQueryBuilder('comentario')
      .innerJoin('comentario.libro', 'libro')
      .where('libro.id = :id', {id})
      .getMany();
  }

  async findUsuarioByLibroComentario(id: string): Promise<Object[]> {
    return this._comentarioRepository
      .createQueryBuilder('comentario')
      .innerJoin('comentario.libro', 'libro')
      .innerJoin('comentario.usuario', 'usuario')
      .select(['comentario', 'usuario.username', 'usuario.imagenUrl'])
      .where('comentario.libro = :id', {id})
    .getMany();
  }



}
