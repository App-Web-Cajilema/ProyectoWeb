import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LibroEntity } from '../libro/libro.entity';

@Entity('AUTOR')
export class AutorEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  apellido: string;

  @OneToMany(type => LibroEntity, libroEntity => libroEntity.autor)
  libros: LibroEntity[];
}