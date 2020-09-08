import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./Rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";


const routes: Routes = [
  {
    component:RutaInicioComponent, //COMPONENTE
    path:'inicio' //URL
  },
  {
    component:RutaLoginComponent, //COMPONENTE
    path:'login' //URL
  },
  {
    path:'',
    redirectTo: '/inicio',
    pathMatch:'full'//URL
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
