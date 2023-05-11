import { Injectable } from '@angular/core';
import {Router } from '@angular/router';
import { WebsocketService } from '../services/websocket.service';

@Injectable({
  providedIn: 'root'
})
export class UsuariosGuard {

  constructor( public wsService:WebsocketService, private router:Router) { }

  canActivate(){

    if( this.wsService.getUsuario()){
      return true

    }else{
      this.router.navigateByUrl('/');
      return false

    }

  }
}
