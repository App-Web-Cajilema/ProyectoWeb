import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ComentarioEntity } from '../comentario/comentario.entity';
import { UsuarioTarjetaEntity } from '../usuario-tarjeta/usuario-tarjeta.entity';


@Entity('USUARIO')
export class UsuarioEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({unique: true})
  username: string;

  @Column()
  contrasenia: string;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @Column()
  correo: string;

  @Column()
  imagenUrl: string;

  @OneToMany(type => ComentarioEntity, comentarioEntity => comentarioEntity.usuario)
  comentarios: ComentarioEntity[];

  @OneToMany(type => UsuarioTarjetaEntity, usuarioTarjetaEntity => usuarioTarjetaEntity.usuario)
  usuariosTarjetas: UsuarioTarjetaEntity[];

}