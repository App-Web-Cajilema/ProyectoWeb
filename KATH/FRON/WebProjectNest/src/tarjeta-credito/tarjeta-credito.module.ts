import { Module } from '@nestjs/common';
import { TarjetaCreditoService } from './tarjeta-credito.service';
import { TarjetaCreditoController } from './tarjeta-credito.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TarjetaCreditoEntity } from './tarjeta-credito.entity';
import { UsuarioTarjetaService } from '../usuario-tarjeta/usuario-tarjeta.service';
import { UsuarioTarjetaEntity } from '../usuario-tarjeta/usuario-tarjeta.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TarjetaCreditoEntity, UsuarioTarjetaEntity])],
  providers: [TarjetaCreditoService, UsuarioTarjetaService],
  controllers: [TarjetaCreditoController]})
export class TarjetaCreditoModule {}
