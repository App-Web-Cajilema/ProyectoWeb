import { Module } from '@nestjs/common';
import { DetallePedidoController } from './detalle-pedido.controller';
import { DetallePedidoService } from './detalle-pedido.service';
import { LibroEntity } from '../libro/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DetallePedidoEntity } from './detalle-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([DetallePedidoEntity])],
  controllers: [DetallePedidoController],
  providers: [DetallePedidoService],
})
export class DetallePedidoModule {}
