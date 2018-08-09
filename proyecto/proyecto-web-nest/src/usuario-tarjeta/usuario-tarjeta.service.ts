import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsuarioTarjetaEntity } from './usuario-tarjeta.entity';
import { Repository } from 'typeorm';
import { UsuarioTarjeta } from './usuario-tarjeta';

@Injectable()
export class UsuarioTarjetaService {


  constructor(
    @InjectRepository(UsuarioTarjetaEntity)
    private readonly _usuarioTarjetaRepository: Repository<UsuarioTarjetaEntity>){}

  async ingresarUsuarioTarjeta(usuarioTarjeta: UsuarioTarjeta){
    const usuarioTarjetaInsert = this._usuarioTarjetaRepository.create({
      usuario: {
        id: usuarioTarjeta.usuarioId,
      },
      tarjetaCredito: {
        id: usuarioTarjeta.tarjetaCreditoId,
      },
    });
    return await this._usuarioTarjetaRepository.insert(usuarioTarjetaInsert);
  }
  async obtenerUsuarioTarjeta(usuarioId: number, tarjetaId: number): Promise<UsuarioTarjetaEntity>{
    return this._usuarioTarjetaRepository.findOne({usuario: {id: usuarioId}, tarjetaCredito: {id: tarjetaId}})
  }
  async eliminarUsuarioTarjeta(id: number){

  }

}
