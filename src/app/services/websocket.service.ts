import { Injectable, OnInit } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Usuario } from '../classes/usuario';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})


export class WebsocketService implements OnInit{

  public socektStatus = false;
  public usuario:Usuario = null;


   constructor( private socket: Socket, private router: Router) {
     this.cargarStorage();
     this.checkStatus();
  }


  ngOnInit(): void {

   }


   checkStatus(){
    this.socket.on('connect', () => {
      console.log('Conectado al servidor');
      this.socektStatus = true;
      this.cargarStorage();

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

   logoutWS(){

    this.usuario = null;
    localStorage.removeItem('usuario');

    const payload = {
      nombre :'sin-nombre'
    }

    this.emit('configurar-usuario', payload, ()=>{});

    this.router.navigateByUrl('');
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


