//import

const fs = require('fs');

console.log('Primero');

fs.readFile( //Asincrona
    './06-ejemplo.txt',
    'utf-8',
    (error , contenido) => { //callback
        console.log('segundo');
        if(error){
            console.error('hubo error', error);
        }else{
        console.log(contenido);
        }
    }

);

const suma = 5+3; //sincrona

console.log('suma', suma); //sincrona

console.log('Final');

