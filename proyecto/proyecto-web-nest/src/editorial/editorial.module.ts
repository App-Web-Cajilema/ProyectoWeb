import { Module } from '@nestjs/common';
import { EditorialController } from './editorial.controller';
import { EditorialService } from './editorial.service';
import { LibroEntity } from '../libro/libro.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EditorialEntity } from './editorial.entity';

@Module({
  imports: [TypeOrmModule.forFeature([EditorialEntity])],
  controllers: [EditorialController],
  providers: [EditorialService]
})
export class EditorialModule {}
