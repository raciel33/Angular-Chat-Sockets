import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';
import { WebsocketService } from 'src/app/services/websocket.service';

@Component({
  selector: 'app-chat-private',
  templateUrl: './chat-private.component.html',
  styleUrls: ['./chat-private.component.css']
})
export class ChatPrivateComponent implements OnInit, OnDestroy {

    mensajesSubscription2: Subscription = new Subscription;

   texto = '';
   elemento: HTMLElement ;

   msgPrivate:any[] = [];

    constructor( private chatService: ChatService,private activateRoute: ActivatedRoute,
      private wsService: WebsocketService){


      }
   ngOnInit(): void {

    this.elemento = document.getElementById('chat-mensajes-privados')


       this.mensajesSubscription2 = this.chatService.getMessagesPrivate().subscribe( msg => {

        console.log(msg);
          this.msgPrivate.push(msg);

      setTimeout(()=>{
         this.elemento.scrollTop = this.elemento.scrollHeight;
      },50)
    })
   }

    ngOnDestroy(): void {
     this.mensajesSubscription2.unsubscribe();
  }

  enviar(){
    if( this.texto.trim().length === 0){
      return
    }
    this.activateRoute.params.subscribe(({id}) =>{
      this.chatService.sendMessagePrivate( this.texto, id  );
})
    this.texto = '';
   }

}
