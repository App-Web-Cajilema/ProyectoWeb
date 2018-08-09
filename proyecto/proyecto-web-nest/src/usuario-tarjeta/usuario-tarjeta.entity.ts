import { Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { TarjetaCreditoEntity } from '../tarjeta-credito/tarjeta-credito.entity';
import { CabeceraPedidoEntity } from '../cabecera-pedido/cabecera-pedido.entity';

@Entity('USUARIO_TARJETA')
export class UsuarioTarjetaEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.usuariosTarjetas)
  usuario: UsuarioEntity;

  @ManyToOne(type => TarjetaCreditoEntity, tarjetaCreditoEntity => tarjetaCreditoEntity.usuariosTarjetas)
  tarjetaCredito: TarjetaCreditoEntity;

  @OneToMany(type => CabeceraPedidoEntity, cabeceraPedidoEntity => cabeceraPedidoEntity.usuarioTarjeta)
  cabeceras: CabeceraPedidoEntity[];

}