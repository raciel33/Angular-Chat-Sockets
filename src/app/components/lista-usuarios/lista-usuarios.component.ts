import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styleUrls: ['./lista-usuarios.component.css']
})
export class ListaUsuariosComponent implements OnInit{

  usuariosActivosObs: Observable<any>;

  constructor( public chatService: ChatService, private router:Router ){

  }

  ngOnInit() {

    this.usuariosActivosObs = this.chatService.getUsuariosActivos();

    this.chatService.emitirUsuariosActivos();

  }
  msgPrivate( id: string ){
      this.router.navigateByUrl(`/msgPrivate/${id}`)
  }
}
