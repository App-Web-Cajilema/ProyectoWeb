import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioTarjetaEntity } from '../usuario-tarjeta/usuario-tarjeta.entity';
import { DetallePedidoEntity } from '../detalle-pedido/detalle-pedido.entity';


@Entity('CABECERA_PEDIDO')
export class CabeceraPedidoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  numero: string;

  @Column()
  fecha: string;

  @Column()
  iva: number;

  @ManyToOne(type => UsuarioTarjetaEntity, usuarioTarjetaEntity => usuarioTarjetaEntity.cabeceras)
  usuarioTarjeta: UsuarioTarjetaEntity;

  @OneToMany(type => DetallePedidoEntity, detallePedidoEntity => detallePedidoEntity.cabecera)
  detalles: DetallePedidoEntity[];

}