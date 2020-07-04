
const fs = require('fs');

//---------------------PROMESAS----------------------
function promesaLeerArchivo(path) {
    const leerArchivo = new Promise(
        (resolve, reject) => {
            fs.readFile(
                path,
                'utf-8',
                (error, contenidoArchivoLeido) => {
                    if (error) {
                        console.error('Error leyendo archivo', error);
                        reject(error);
                    } else {
                        resolve(contenidoArchivoLeido);
                       // console.log(contenidoArchivoLeido);
                    }
                }
            );
        }
    );
    return leerArchivo
}
function promesaEscribirArchivo(path, contenidoActual, nuevoContenido) {
    const escribirArchivo = new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                contenidoActual + '\n' + nuevoContenido,
                'utf-8',
                (error) => {
                    if (error) {
                        console.error('Error leyendo archivo', error);
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
    return escribirArchivo;
}



//ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio(path,nuevoContenido) {

   // console.log('1');

    try {

        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        await promesaEscribirArchivo(path,respuestaLecturaArchivo,nuevoContenido);// ---estaria escrito otra vez el archivo
        const resultadoContenido = await promesaLeerArchivo(path);

        console.log(resultadoContenido);


    }catch(error){

        console.error(error);

    }

}

ejercicio("./02-async-await.txt","ejercicio de javaScript");