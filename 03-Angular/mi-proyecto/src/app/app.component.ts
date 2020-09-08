import {Component, OnInit} from '@angular/core';
import {UsuarioService} from "./servicios/http/usuario.service";
import {observable} from "rxjs";

@Component({
  selector: 'aplicacion-nueva',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  title = 'mi-proyecto';

  habilitado = true;

  arregloNumeros =[1,2,3];

  arregloUsuarios=[];

  arregloObservables = [];

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
      url:'https://i.pinimg.com/736x/31/b0/4d/31b04d625dbfafee3dad8c85e6eb8451.jpg',
      descripcion:'pelicula de antiheroe',
      nombrePelicula: 'the Kocker'
    },
  ]

  // Inyectar Dependencias
  constructor(private readonly  _usuarioService: UsuarioService) {

  }

  ngOnInit(){

    this.mensajeConsola(true);

  }

  mensajeConsola(objeto: boolean){

    console.log('llego el evento', objeto);

      const observableTraerTodos = this._usuarioService.traerTodos();
      this.arregloObservables.push(observableTraerTodos);
      const subscripcion = observableTraerTodos
          .subscribe(
              (data)=>{ // THEN TRY

                this.arregloUsuarios = data as any[];
                console.log(data);
              },
              (error)=>{ // CATCH
                console.log(error);
              }
          );
      this.arregloObservables.push(subscripcion);
     // subscripcion.unsubscribe();

  }

  crearUsuario(){
    const usuarioNuevo = {
      cedula: "1718935999",
      nombre:"isacc",
      apellido:"newton"
    };
    const obsCrearUsuario = this._usuarioService.crear(usuarioNuevo);
    obsCrearUsuario
        .subscribe(
            (data)=>{ // THEN TRY
              console.log('Nuevo Usuario', data);
              this.mensajeConsola(true)
            },
            (error)=>{ // CATCH
              console.log(error);
            }
        );


  }


}

