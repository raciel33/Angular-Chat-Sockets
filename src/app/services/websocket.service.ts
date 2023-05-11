import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';

@Injectable({
  providedIn: 'root'
})


export class WebsocketService {

  public socektStatus = false;
  public usuario:Usuario = null;


   constructor( private socket: Socket) {
    this.cargarStorage();
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

       this.socket.emit( evento, payload, callback );
   }

   listen( evento:string ){

      return this.socket.fromEvent( evento )
   }



   loginWS( nombre: string){

     return new Promise<void>( (resolve, reject ) => {

       this.emit('configurar-usuario',{ nombre }, resp => {

        this.usuario = new Usuario( nombre );
        this.guardarStorage();

        resolve();

      })
     })
   }

   getUsuario(){
    return this.usuario
   }
   //guardamos en localStorage para mantener la sesion del usuario
   guardarStorage(){

    localStorage.setItem('usuario',JSON.stringify( this.usuario ))

   }

   //cargamos lo que hay en el item usuario del localStorage
   cargarStorage(){

    if( localStorage.getItem('usuario')){

      this.usuario = JSON.parse(localStorage.getItem('usuario'));

      this.loginWS( this.usuario.nombre )
    }
   }
}


