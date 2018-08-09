import { Module } from '@nestjs/common';
import { ComentarioController } from './comentario.controller';
import { ComentarioService } from './comentario.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentarioEntity } from './comentario.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentarioEntity])],
  controllers: [ComentarioController],
  providers: [ComentarioService]
})
export class ComentarioModule {}
