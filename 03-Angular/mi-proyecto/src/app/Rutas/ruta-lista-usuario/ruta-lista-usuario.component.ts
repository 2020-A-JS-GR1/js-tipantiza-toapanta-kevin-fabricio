import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {Router} from "@angular/router";



@Component({
  selector: 'app-ruta-lista-usuario',
  templateUrl: './ruta-lista-usuario.component.html',
  styleUrls: ['./ruta-lista-usuario.component.css']
})
export class RutaListaUsuarioComponent implements OnInit {
  arregloUsuarios = [];
  constructor(  private readonly _usuarioService: UsuarioService, private readonly _router: Router) { }

  ngOnInit(): void {
    const observableTraerTodos = this._usuarioService.traerTodos();
    observableTraerTodos
        .subscribe(
            (usuarios:any[]) =>{
              this.arregloUsuarios = usuarios;
            },
            (error) =>{
              console.error('Error',error)
            }
        )
  }


  irAEditarUsuario(id:number){

    const ruta = ['/usuario', 'editar', id] //se forma la siguiente url /usuario/editar/1

    this._router.navigate(ruta)

  }
  eliminarUsuario(id:number){

      const obsEliminar = this._usuarioService
          .eliminar(id);
      obsEliminar.subscribe(
          ()=>{
              //borrando de la interfaz
              const indice = this.arregloUsuarios
                  .findIndex( u => u.id ==id);
              this.arregloUsuarios.splice(indice, 1);

          },
          (error)=>{
              console.log('error',error)
          }
      )

  }
}


