import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LibroEntity } from '../libro/libro.entity';

@Entity('GENERO')

export class GeneroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @OneToMany(type => LibroEntity, libroEntity => libroEntity.genero)
  libros: LibroEntity[];

}