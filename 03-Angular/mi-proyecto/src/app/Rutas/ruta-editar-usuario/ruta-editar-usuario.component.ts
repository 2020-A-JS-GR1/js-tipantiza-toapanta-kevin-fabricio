import { Component, OnInit } from '@angular/core';
import {UsuarioService} from "../../servicios/http/usuario.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-ruta-editar-usuario',
  templateUrl: './ruta-editar-usuario.component.html',
  styleUrls: ['./ruta-editar-usuario.component.css']
})
export class RutaEditarUsuarioComponent implements OnInit {
  usuario;

  mostrarFormulario = false;

  constructor(
      private readonly _usuarioService:UsuarioService,
      private readonly _activatedRoute:ActivatedRoute,
      private readonly  _router : Router
  ) {

  }

  ngOnInit(): void {
    const obsRuta = this._activatedRoute.params;
    obsRuta
        .subscribe(
            (parametros) =>{
              const id = Number(parametros.id);
              const obsUsuario =this._usuarioService.obtenerUnoPorId(id);
              obsUsuario.subscribe(
                  (usuario:any)=>{
                    this.usuario = usuario;
                    //cuando llegan los datos llamar a la funcion
                      this.llenarFormularioConDatosDeUsuario()
                  },
                  (error)=>{
                    console.log('Error',error)
                  }
              )
            }
        )
  }


  llenarFormularioConDatosDeUsuario(){
      this.mostrarFormulario = true;

  }

    editarUsuario(usuario){

      const obsEditarUsuario = this._usuarioService.editar(usuario, this.usuario.id)
        obsEditarUsuario
            .subscribe(
                (datos)=>{

                    const url = ['/usuario','lista']

                    this._router.navigate(url)

                },
                (error)=>{
                    console.error(error)
                }
            )


    }


}
