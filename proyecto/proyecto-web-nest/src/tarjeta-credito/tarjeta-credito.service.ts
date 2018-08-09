import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository, UpdateResult } from 'typeorm';
import { TarjetaCreditoEntity } from './tarjeta-credito.entity';
import { TarjetaCredito } from './tarjeta-credito';
import { UsuarioTarjetaEntity } from '../usuario-tarjeta/usuario-tarjeta.entity';

@Injectable()
export class TarjetaCreditoService {

  constructor(
    @InjectRepository(TarjetaCreditoEntity)
    private readonly _tarjetaRepository: Repository<TarjetaCreditoEntity>,
    @InjectRepository(UsuarioTarjetaEntity) private readonly _usuarioTarjetaRepository: Repository<UsuarioTarjetaEntity>,
  ){}

  async findByUserId(id: number): Promise<TarjetaCreditoEntity[]>{
    return await this._tarjetaRepository
      .createQueryBuilder('tarjeta_credito')
      .innerJoin('tarjeta_credito.usuariosTarjetas', 'usuarios_tarjetas')
      .select('tarjeta_credito')
      .where('usuarios_tarjetas.usuario = :id', {id})
      .getMany();
  }

  async insert(id: number, tarjeta: TarjetaCredito): Promise<TarjetaCreditoEntity>{
    const tarjetaPreload = await this._tarjetaRepository.save(tarjeta);
    const usuarioTarjeta = this._usuarioTarjetaRepository.create(
      {
        usuario: { id },
        tarjetaCredito: { id: tarjetaPreload.id },
      });
    await this._usuarioTarjetaRepository.insert(usuarioTarjeta);
    return tarjetaPreload;
  }

  async update(tarjeta: TarjetaCredito): Promise<TarjetaCreditoEntity>{
    return await this._tarjetaRepository.save(tarjeta);
  }

  async delete(id_usuario: number, id: number){
    return await this._usuarioTarjetaRepository.delete({
      usuario: {id: id_usuario},
      tarjetaCredito: { id }
    });
  }
}
