import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { LibroEntity } from '../libro/libro.entity';

@Entity('EDITORIAL')
export class EditorialEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;


  @OneToMany(type => LibroEntity, libroEntity => libroEntity.editorial)
  libros: LibroEntity[];
}