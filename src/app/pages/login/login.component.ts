import { Component } from '@angular/core';
import { WebsocketService } from '../../services/websocket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  nombre = '';


  constructor( public wsService: WebsocketService,
                 private router:Router){

  }
  ingresar(){
      this.wsService.loginWS( this.nombre ).then(() =>{
        this.router.navigateByUrl( '/mensajes')
      })
  }
}
