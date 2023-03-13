import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';

@Injectable({
  providedIn: 'root'
})


export class WebsocketService {

  public socektStatus = false;


   constructor( private socket: Socket) {

    this.checkStatus();
   }


   checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socektStatus = true;
    });
    this.socket.on('disconnect', () => {
      console.log('Desconectado del servidor');
       this.socektStatus = false;
    });
   }

   //emit( 'EVENTO', payload,  CALLBACK)
   //evento que quiero emitir, lo que voy a enviar, lo que voy hacer despues
   emit( evento:string, payload?:any, callback?:Function){

    console.log('emitiendo evento');
       this.socket.emit( evento, payload, callback );
   }

   listen( evento:string ){

      return this.socket.fromEvent( evento )
   }
}


