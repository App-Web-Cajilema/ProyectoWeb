import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioTarjetaEntity } from '../usuario-tarjeta/usuario-tarjeta.entity';

@Entity('TARJETA_CREDITO')
export class TarjetaCreditoEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({nullable: true})
  tipo: string;

  @Column({unique: true})
  numero: string;

  @Column()
  codigo: number;

  @Column()
  mes: number;

  @Column()
  anio: number;

  @OneToMany(type => UsuarioTarjetaEntity, usuarioTarjetaEntity => usuarioTarjetaEntity.tarjetaCredito)
  usuariosTarjetas: UsuarioTarjetaEntity[];

}