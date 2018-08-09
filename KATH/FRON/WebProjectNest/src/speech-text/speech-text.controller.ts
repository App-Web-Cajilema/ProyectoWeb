import { BadRequestException, Body, Controller, Post, Req, Res } from '@nestjs/common';
import { SpeechTextService } from './speech-text.service';
const fs = require('fs');
const request = require('request');

@Controller('speech-text')
export class SpeechTextController {

  username = '09c2a177-c18b-4b31-adbd-43f23e23be6a';
  password = 'rkOFxYqNgqup';
  url = `https://${this.username}:${this.password}@stream.watsonplatform.net/speech-to-text/api/v1/recognize?model=es-ES_BroadbandModel`;

  constructor(
    private readonly _speechService: SpeechTextService,
  ){}

  @Post()
  obtenerDatos(@Body() bodyRecv, @Res() res){
    const audioB64 = bodyRecv.audio;
    const audio = Buffer.from(audioB64, 'base64');
    /*fs.writeFile('audio.wav', audio, (err)=>{
      if (err){
        console.log(err);
      }
    });*/
    const options = {
      uri: this.url,
      body: audio,
      headers: {
        'Content-Type': 'audio/webm',
      },
    };

    request.post(options, (error, response, body) => {
      if (error){
        console.log(error);
        res.send('');
      }else{
        try {
          const textoRecv = JSON.parse(body);
          console.log(JSON.stringify(textoRecv));
          const texto = textoRecv.results[0].alternatives[0].transcript.trim();
          res.send(`{"texto": "${ texto }"}`);
        }catch (e){
          res.send('Error');
        }
      }
    });
  }
}
