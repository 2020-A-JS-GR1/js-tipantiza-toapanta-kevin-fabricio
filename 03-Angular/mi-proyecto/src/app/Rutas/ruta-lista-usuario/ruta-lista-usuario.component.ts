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
  busquedaModelo = '';

  constructor(  private readonly _usuarioService: UsuarioService, private readonly _router: Router) { }

  ngOnInit(): void {
      this.filtrarArreglo()

  }

    filtrarArreglo(){

      const consulta = {
          or: [

              {
                  nombre:{
                      contains : this.busquedaModelo

                  }
              },
              {
                  cedula:{
                      contains : this.busquedaModelo

                  }
              },

          ]
      }

      const consultaString = 'where=' + JSON.stringify(consulta)

        const observableTraerTodos = this._usuarioService
            .traerTodos( this.busquedaModelo != '' ? consultaString:'');
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


