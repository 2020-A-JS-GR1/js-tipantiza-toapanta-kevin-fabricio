const fs = require('fs');
/*
* Hacer una funcion que acepte como parametro una variable
* con el path del archivo y el contenido a agregar al contenido
* del archivo. La funcion debe tomar estos dos parametros y leer
* el archivo y añadir el texto al final del archivo
* */

function escribirArchivo(path, contenidoNuevo) {
    //fs.readFile(path, codificacion, callback);
    // fs.writeFile(path,contenido,codificacion,callback);
    fs.readFile(path,
        'utf8',
        (error , contenido) => { //callback
            if(error){
                console.error('hubo error', error);
            }else{
                fs.writeFile(path,
                    contenidoNuevo +"\n"+  contenido,
                    'utf8',
                    (error) => { //callback

                        if(error){
                            console.error('hubo error', error);
                        }else{
                            console.log(contenido);
                        }
                    });
            }

        });
}
/*
function escribirArchivo(path, contenidoNuevo) {
    fs.readFile(
        path,
        'utf-8',
        (error, contenidoLeido) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                escribirArchivo(path, contenidoNuevo, contenidoLeido)
            }
        }
    );
    // fs.writeFile(path, contenido, codificacion, callback(error));
}
function escribirArchivo(path, contenidoNuevo, contenidoLeido) {
    fs.writeFile(
        path,
        contenidoNuevo + '\n' + contenidoLeido,
        'utf-8',
        (error) => {
            if (error) {
                console.error('Error leyendo archivo', error);
            } else {
                console.log('Operacion terminada con exito')
            }
        });
}
*/


//escribirArchivo('./06-ejemplo.txt','Buenas tardes clase');

