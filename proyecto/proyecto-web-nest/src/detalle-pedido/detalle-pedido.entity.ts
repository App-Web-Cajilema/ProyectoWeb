import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { CabeceraPedidoEntity } from '../cabecera-pedido/cabecera-pedido.entity';
import { LibroEntity } from '../libro/libro.entity';

@Entity('DETALLE_PEDIDO')
export class DetallePedidoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  cantidad: number;


  @ManyToOne(type => CabeceraPedidoEntity, cabeceraPedidoEntity => cabeceraPedidoEntity.detalles)
  cabecera: CabeceraPedidoEntity;

  @ManyToOne(type => LibroEntity, libroEntity => libroEntity.detalles)
  libro: LibroEntity;
}