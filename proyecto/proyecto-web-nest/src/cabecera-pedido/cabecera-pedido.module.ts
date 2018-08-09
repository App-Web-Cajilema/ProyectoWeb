import { Module } from '@nestjs/common';
import { CabeceraPedidoController } from './cabecera-pedido.controller';
import { CabeceraPedidoService } from './cabecera-pedido.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CabeceraPedidoEntity } from './cabecera-pedido.entity';

@Module({
  imports: [TypeOrmModule.forFeature([CabeceraPedidoEntity])],
  controllers: [CabeceraPedidoController],
  providers: [CabeceraPedidoService]
})
export class CabeceraPedidoModule {}
