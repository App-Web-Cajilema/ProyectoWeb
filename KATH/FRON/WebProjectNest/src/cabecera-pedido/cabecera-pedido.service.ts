import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CabeceraPedidoEntity } from './cabecera-pedido.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { CabeceraPedido } from './cabecera-pedido';

@Injectable()
export class CabeceraPedidoService {

  constructor(
    @InjectRepository(CabeceraPedidoEntity)
    private readonly _cabeceraRepository: Repository<CabeceraPedidoEntity>,
  ){}

  async findAll(): Promise<CabeceraPedidoEntity[]>{
    return await this._cabeceraRepository.find();
  }

  async findById(id: string): Promise<CabeceraPedidoEntity>{
    return await this._cabeceraRepository.findOne(id);
  }

  async insert(cabecera: CabeceraPedido): Promise<InsertResult>{
    return await this._cabeceraRepository.save(cabecera);
  }

  async update(id: string, cabecera: CabeceraPedido): Promise<UpdateResult>{
    return await this._cabeceraRepository.update(id, cabecera);
  }

  async delete(id: string){
    return await this._cabeceraRepository.delete(id);
  }


}
