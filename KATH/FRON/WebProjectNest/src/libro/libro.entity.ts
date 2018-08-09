import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ComentarioEntity } from '../comentario/comentario.entity';
import { DetallePedidoEntity } from '../detalle-pedido/detalle-pedido.entity';
import { AutorEntity } from '../autor/autor.entity';
import { EditorialEntity } from '../editorial/editorial.entity';
import { GeneroEntity } from '../genero/genero.entity';

@Entity('LIBRO')
export class LibroEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nombre: string;

  @Column()
  anio: number;

  @Column()
  numeroPaginas: number;

  @Column()
  descripcion: string;

  @Column()
  precio: number;

  @Column()
  imagenUrl: string;

  @OneToMany(type => ComentarioEntity, comentarioEntity => comentarioEntity.libro)
  comentarios: ComentarioEntity[];

  @OneToMany(type => DetallePedidoEntity, detallePedidoEntity => detallePedidoEntity.libro)
  detalles: DetallePedidoEntity[];

  @ManyToOne(type => AutorEntity, autorEntity => autorEntity.libros)
  autor: AutorEntity;

  @ManyToOne(type => GeneroEntity, generoEntity => generoEntity.libros)
  genero: GeneroEntity;

  @ManyToOne(type => EditorialEntity, editorialEntity => editorialEntity.libros)
  editorial: EditorialEntity;

}