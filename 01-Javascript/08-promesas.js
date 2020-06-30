const fs = require('fs');

function promesaEsPar(numero) {
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) =>{
            if(numero %2 ==0){
                resolve(numero);
            }else{

                reject('No es par =(')
            }
            //  resolve('Felicidad');

        }
    )

    return miPrimerPromesa
}

function promesaElevarAlCuadrado(numero) {
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) =>{
          //solo va hacer una tarea y no va a fallar jamas--usamos solo resolve

            const numeroElevadoAlCuadrado = Math.pow(numero,2);
            resolve(numeroElevadoAlCuadrado);

        }
    );

    return miPrimerPromesa
}








promesaEsPar(2)
    .then( //try
    (numeroPar)=>{
        console.log('contenido then', numeroPar);


        return promesaElevarAlCuadrado(numeroPar)//promesa
    }
    ).then(
    (numeroParAlCuadrado) =>{
        console.log('Numero par al cuadrado: ',numeroParAlCuadrado)
    }
)
    .catch( //catch
        (error) =>{
            console.error('contenido catch', error)
        }
    )

