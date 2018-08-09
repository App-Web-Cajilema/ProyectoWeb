import { Module } from '@nestjs/common';
import { UsuarioTarjetaController } from './usuario-tarjeta.controller';
import { UsuarioTarjetaService } from './usuario-tarjeta.service';
import { InjectRepository, TypeOrmModule } from '@nestjs/typeorm';
import { UsuarioTarjetaEntity } from './usuario-tarjeta.entity';
import { Repository } from 'typeorm';
import { UsuarioTarjeta } from './usuario-tarjeta';

@Module({
  exports: [UsuarioTarjetaService],
  imports: [TypeOrmModule.forFeature([UsuarioTarjetaEntity])],
  controllers: [UsuarioTarjetaController],
  providers: [UsuarioTarjetaService],
})
export class UsuarioTarjetaModule {
  constructor() {}
}
