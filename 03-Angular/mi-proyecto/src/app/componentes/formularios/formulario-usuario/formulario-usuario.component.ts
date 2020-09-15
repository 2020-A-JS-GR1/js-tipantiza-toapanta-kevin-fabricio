import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulario-usuario',
  templateUrl: './formulario-usuario.component.html',
  styleUrls: ['./formulario-usuario.component.css']
})
export class FormularioUsuarioComponent implements OnInit {

  nombreModelo:string;
  cedulaModelo:string;
  estadoCivilModelo:string;

  constructor() { }

  ngOnInit(): void {
  }

  crearUsuario(formulario){

    //console.log(formulario);

    const cedula = this.cedulaModelo;
    const esNumero = !Number.isNaN(Number(cedula));
    if(esNumero){
      //LLAMAR AL SERVICIO HTTP Y ENVIAR UN POST AL SERVIDOR CON LOS DATOS DEL FORMULARIO
      console.log('LISTO:)');
    }else{
      console.error('No es un Numero')
    }

  }
  ayuda(){
    alert('ayuda')
  }

}
