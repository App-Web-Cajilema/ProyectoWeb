import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EditorialEntity } from './editorial.entity';
import { AutorEntity } from '../autor/autor.entity';

@Injectable()
export class EditorialService {

  constructor(
    @InjectRepository(EditorialEntity)
    private readonly _editorialRepository:Repository<EditorialEntity>,
  ){}

  async findAll(): Promise<EditorialEntity[]>{
    return await this._editorialRepository.find();
  }

  async findByEditorialId(id: string): Promise<EditorialEntity>{
    return await this._editorialRepository.findOne(id);

  }

  async findByEditorialName(nombre: string): Promise<EditorialEntity[]>{
    return await this._editorialRepository.find({nombre});
  }

  async findByLibroId(id: string): Promise<EditorialEntity>{
    return this._editorialRepository.createQueryBuilder('editorial')
      .innerJoin('editorial.libros', 'libro')
      .where('libro.id = :id', {id})
      .getOne();
  }

}
