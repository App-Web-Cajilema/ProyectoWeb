import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { UsuarioEntity } from '../usuario/usuario.entity';
import { LibroEntity } from '../libro/libro.entity';

@Entity('COMENTARIO')
export class ComentarioEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fecha: string;

  @Column()
  comentario: string;

  @Column()
  puntuacionLibro: number;

  @ManyToOne(type => UsuarioEntity, usuarioEntity => usuarioEntity.comentarios)
  usuario: UsuarioEntity;

  @ManyToOne(type => LibroEntity, libroEntity => libroEntity.comentarios)
  libro: LibroEntity;
}