import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DetallePedidoEntity } from './detalle-pedido.entity';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { DetallePedido } from './detalle-pedido';

@Injectable()
export class DetallePedidoService {

  constructor(
    @InjectRepository(DetallePedidoEntity)
    private readonly _detalleRepository:Repository<DetallePedidoEntity>,
  ){}

  async findAll(): Promise<DetallePedidoEntity[]>{
    return await this._detalleRepository.find();
  }

  async findByCabeceraId(id: string): Promise<DetallePedidoEntity>{
    return await this._detalleRepository.findOne(id);
  }

  async insert(detalle: DetallePedido): Promise<InsertResult>{
    return await this._detalleRepository.insert(detalle);
  }

  async update(id: string, detalle: DetallePedido): Promise<UpdateResult>{
    return await this._detalleRepository.update(id, detalle);
  }

  async delete(id: string){
    return await this._detalleRepository.delete(id);
  }

}
