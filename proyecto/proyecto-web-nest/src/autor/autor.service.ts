import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';
import { Repository } from 'typeorm';
import { LibroEntity } from '../libro/libro.entity';

@Injectable()
export class AutorService {

  constructor(
    @InjectRepository(AutorEntity)
    private readonly _autorRepository: Repository<AutorEntity>,
  ){}

  async findAll(): Promise<AutorEntity[]>{
    return await this._autorRepository.find();
  }

  async findById(id: string): Promise<AutorEntity>{
    return await this._autorRepository.findOne(id);
  }

  async findByNombre(nombre: string): Promise<AutorEntity[]>{
    return await this._autorRepository.find({ nombre });
  }

  async findByLibroId(id: string): Promise<AutorEntity>{
    return this._autorRepository.createQueryBuilder('autor')
      .innerJoin('autor.libros', 'libro')
      .where('libro.id = :id', {id})
      .getOne();
  }
}