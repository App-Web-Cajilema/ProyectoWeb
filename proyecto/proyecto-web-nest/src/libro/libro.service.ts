import { Injectable } from '@nestjs/common';
import { Like, Repository } from 'typeorm';
import { LibroEntity } from './libro.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorEntity } from '../autor/autor.entity';


@Injectable()
export class LibroService {
  constructor(
    @InjectRepository(LibroEntity)
    private readonly _libroRepository: Repository<LibroEntity>,
  ){}

  async findAll(): Promise<LibroEntity[]>{
    return await this._libroRepository.find();
  }

  async findByLibroId(id: string): Promise<LibroEntity>{
    return await this._libroRepository.findOne(id);
  }

  async findByLibroName(nombre: string): Promise<LibroEntity[]>{
    return await this._libroRepository.find({nombre:nombre});
  }

  async findLike(lk: string): Promise<LibroEntity[]>{
      return await this._libroRepository.find({
        nombre: Like(`%${lk}%`),
      });
  }

}
