import { WebsocketService } from './../../services/websocket.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {


  constructor( public wsService: WebsocketService){


  }
}
