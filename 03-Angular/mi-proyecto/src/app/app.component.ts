import { Component } from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";
import {observable} from "rxjs";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  title = 'mi-proyecto';
  arregloNumeros =[1,2,3];
  arregloPeliculas = [
    {
      id:1,
      url:'https://www.espectroemocional.site/wp-content/uploads/2020/04/poster-spiderman-1.jpg',
      descripcion:'pelicula de superheroe',
      nombrePelicula: 'Spider-man'
    },
    {
      id:2,
      url:'https://i.ytimg.com/vi/WPQq7fw_XMk/maxresdefault.jpg',
      descripcion:'pelicula de accion',
      nombrePelicula: 'Extracción'
    },
    {
      id:3,
      url:'https://pics.filmaffinity.com/Joker-790658206-mmed.jpg',
      descripcion:'pelicula de antiheroe',
      nombrePelicula: 'the Kocker'
    },
  ]

  // Inyectar Dependencias
  constructor(private readonly  _usuarioService: UsuarioService) {

  }

  mensajeConsola(objeto: boolean){

    console.log('llego el evento', objeto);

      const observableTraerTodos = this._usuarioService.traerTodos();
      observableTraerTodos
          .subscribe(
              (data)=>{ // THEN TRY
                console.log(data);
              },
              (error)=>{ // CATCH
                console.log(error);
              }
          );

  }


}

