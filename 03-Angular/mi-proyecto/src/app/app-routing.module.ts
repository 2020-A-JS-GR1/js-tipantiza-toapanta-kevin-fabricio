import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RutaInicioComponent} from "./Rutas/ruta-inicio/ruta-inicio.component";
import {RutaLoginComponent} from "./Rutas/ruta-login/ruta-login.component";
import {RutaUsuarioComponent} from "./Rutas/ruta-usuario/ruta-usuario.component";
import {RutaListaUsuarioComponent} from "./Rutas/ruta-lista-usuario/ruta-lista-usuario.component";
import {RutaCrearUsuarioComponent} from "./Rutas/ruta-crear-usuario/ruta-crear-usuario.component";
import {RutaEditarUsuarioComponent} from "./Rutas/ruta-editar-usuario/ruta-editar-usuario.component";
import {EstaLogeadoGuards} from "./servicios/guards/esta-logeado.guards";
import {EsAdministradorGuards} from "./servicios/guards/es-administrador.guards";
import {EsSupervisorGuards} from "./servicios/guards/es-supervisor.guards";


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
    component:RutaUsuarioComponent,
    path:'usuario',
    canActivate:[
        EstaLogeadoGuards
    ],
    children:[
      {
        path:'lista',
        component: RutaListaUsuarioComponent
      },
      {
        path:'crear',
        component:RutaCrearUsuarioComponent,
        canActivate:[
            EsSupervisorGuards
        ]
      },
      {
        path:'editar/:id',
        component: RutaEditarUsuarioComponent,
        canActivate:[
            EsAdministradorGuards
        ]
      },
      {
        path:'',
        redirectTo:'lista',
        pathMatch:'full'//URL

      }
    ]
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
