import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CartaPeliculaComponent } from './componentes/carta-pelicula/carta-pelicula.component';
import {UsuarioService} from "./servicios/http/usuario.service";
import {HttpClientModule} from '@angular/common/http';
import { RutaInicioComponent } from './Rutas/ruta-inicio/ruta-inicio.component';
import { RutaLoginComponent } from './Rutas/ruta-login/ruta-login.component';
import { RutaDetalleUsuarioComponent } from './Rutas/ruta-detalle-usuario/ruta-detalle-usuario.component';
import { RutaUsuarioComponent } from './Rutas/ruta-usuario/ruta-usuario.component';
import { RutaListaUsuarioComponent } from './Rutas/ruta-lista-usuario/ruta-lista-usuario.component';
import { RutaCrearUsuarioComponent } from './Rutas/ruta-crear-usuario/ruta-crear-usuario.component';
import { RutaEditarUsuarioComponent } from './Rutas/ruta-editar-usuario/ruta-editar-usuario.component';
import { FormularioUsuarioComponent } from './componentes/formularios/formulario-usuario/formulario-usuario.component';
import {FormsModule} from "@angular/forms";
import {AuthService} from "./servicios/auth/auth.service";
import {EstaLogeadoGuards} from "./servicios/guards/esta-logeado.guards";
import {EsAdministradorGuards} from "./servicios/guards/es-administrador.guards";
import {EsSupervisorGuards} from "./servicios/guards/es-supervisor.guards";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent,
    RutaUsuarioComponent,
    RutaListaUsuarioComponent,
    RutaCrearUsuarioComponent,
    RutaEditarUsuarioComponent,
    FormularioUsuarioComponent
  ],
  imports: [ //Modulo que vamos a usar
    BrowserModule, //-> Importar el NGFOR y el NGIF
    AppRoutingModule,
    HttpClientModule, // -> Importa el HttpClient
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    NgbModule, //Permite la funcionalidad de los formularios Template
    ButtonModule
  ],
  providers: [ //Servicios
      UsuarioService,
      AuthService,
      EstaLogeadoGuards,
      EsAdministradorGuards,
      EsSupervisorGuards

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
