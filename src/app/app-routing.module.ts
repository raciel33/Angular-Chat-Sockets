import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MensajesComponent } from './pages/mensajes/mensajes.component';
import { UsuariosGuard } from './guards/usuarios-guard.service';

const routes: Routes = [

  { path:'',component:LoginComponent },

  //ruta protegida:
  {
    path:'mensajes',component:MensajesComponent,canActivate:[UsuariosGuard]
   },
  { path:'**',component:LoginComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
