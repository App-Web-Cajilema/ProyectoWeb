import { Module } from '@nestjs/common';
import { GeneroController } from './genero.controller';
import { GeneroService } from './genero.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GeneroEntity } from './genero.entity';

@Module({
  imports: [TypeOrmModule.forFeature([GeneroEntity])],
  controllers: [GeneroController],
  providers: [GeneroService]
})
export class GeneroModule {}
