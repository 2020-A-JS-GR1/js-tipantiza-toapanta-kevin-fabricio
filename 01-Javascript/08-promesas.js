const fs = require('fs');

const miPrimerPromesa = new Promise( //Definicion de la promesa
    (resolve, reject) =>{
        resolve('Felicidad');
}
)

miPrimerPromesa
    .then( //try
    (contenido)=>{
        console.log('contenido then', contenido);
    }
    )
    .catch( //catch
        (error) =>{
            console.error('contenido catch', error)
        }
    )