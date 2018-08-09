import { Module } from '@nestjs/common';
import { AutorController } from './autor.controller';
import { AutorService } from './autor.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutorEntity } from './autor.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AutorEntity])],
  controllers: [AutorController],
  providers: [AutorService],
})
export class AutorModule {}
