import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-carta-pelicula',
  templateUrl: './carta-pelicula.component.html',
  styleUrls: ['./carta-pelicula.component.css']
})
export class CartaPeliculaComponent implements OnInit {

  @Input()
  urlImagen:string;

  @Input()
  descripcion:string;

  @Input()
  nombreBoton:string;

  urlEjemploImagen = 'https://www.espectroemocional.site/wp-content/uploads/2020/04/poster-spiderman-1.jpg';
  textoEjemplo = 'Kevin';

  linkTextoEjemplo = 'https://www.google.com'


  constructor() { }

  ngOnInit(): void {
  }

  ejemploFuncion(){
    alert('hola kevin')
  }
  eventoOnBlur(){
    console.log('Blur')
  }

}
