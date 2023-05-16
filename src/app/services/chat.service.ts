import { Injectable } from '@angular/core';
import { WebsocketService } from './websocket.service';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor( public wsService:WebsocketService,) { }


  sendMessage( mensaje:string ){

    const payload = {
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    };

    this.wsService.emit('mensaje', payload)



  }
  sendMessagePrivate( mensaje:string, id:string  ){

    const payload = {
      id:id,
      de: this.wsService.getUsuario().nombre,
      cuerpo: mensaje
    };

    this.wsService.emit('msgPrivate', payload)


  }

  getMessage(){

   return this.wsService.listen('mensaje-nuevo')
  }


//mensajes privados
  getMessagesPrivate(){

    return this.wsService.listen('msgPrivate');
  }

  //usuarios activos
  getUsuariosActivos(){

    return this.wsService.listen('usuarios-activos');
  }

  //emitir usuarios Activos
  emitirUsuariosActivos(){

    return this.wsService.emit('obtener-usuarios');
  }
}
