import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-messages-private',
  templateUrl: './messages-private.component.html',
  styleUrls: ['./messages-private.component.css']
})
export class MessagesPrivateComponent {

  constructor( private router: Router){

  }

}
