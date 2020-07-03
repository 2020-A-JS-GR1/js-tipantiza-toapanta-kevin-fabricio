const fs = require('fs');

//09-ejercicio-lec-esc-promesas
/*
* Hacer una funcion que acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La funcion debe tomar estos dos parametros y leer
* el archivo y añadir el texto al final del archivo. Al final
* vamos a leer el archivo nuevamente e imprimirlo en consola.
* TODO esto debe ser realizado con promesas
*

 */

function promesaLeerArchivo(path) {
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) =>{
            fs.readFile(path,'UTF-8',
                (error , contenido) => { //callback

                    if(error){
                        reject(error)
                    }else{
                        resolve(contenido);
                    }
                });

        }
    )

    return miPrimerPromesa
}

function escribirArchivo(path, contenidoActual, contenidoNuevo) {
    const miPrimerPromesa = new Promise( //Definicion de la promesa
        (resolve, reject) =>{

            fs.writeFile(path,
                contenidoActual + "\n"+  contenidoNuevo,
                'utf8',
                (error) => {

                    if(error){
                        reject(error)
                    }else{
                        resolve();
                    }
                });

        }
    )

    return miPrimerPromesa
}

function leerImprimirConsola(path,nuevoContenido){
    promesaLeerArchivo(path)
        .then(
            (contenidoArchivoActual) =>{
                return escribirArchivo(path,contenidoArchivoActual,nuevoContenido);
            }
        )
        .then( //escribir archivo
            ()=>{
                return promesaLeerArchivo(path);

            }
        )
        .then(
            (nuevoContenido) =>{
                console.log('nuevo contenido', nuevoContenido);
            }
        )
        .catch(
            (error)=>{
                console.log(error)
            }
        )

}


leerImprimirConsola("./09-ejercicio-lec-esc-promesa.txt", "buenas tardes kevin");