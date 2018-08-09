import { Module } from '@nestjs/common';
import { SpeechTextController } from './speech-text.controller';
import { SpeechTextService } from './speech-text.service';

@Module({
  controllers: [SpeechTextController],
  providers: [SpeechTextService],
})
export class SpeechTextModule {}
