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

@NgModule({
  declarations: [ //Componentes
    AppComponent,
    CartaPeliculaComponent,
    RutaInicioComponent,
    RutaLoginComponent,
    RutaDetalleUsuarioComponent
  ],
  imports: [ //Modulo que vamos a usar
    BrowserModule, //-> Importar el NGFOR y el NGIF
    AppRoutingModule,
    HttpClientModule, // -> Importa el HttpClient
  ],
  providers: [ //Servicios
      UsuarioService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
