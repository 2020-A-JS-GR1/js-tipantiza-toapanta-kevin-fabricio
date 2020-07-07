const promesaLeerArchivo = () =>{
    return new Promise(
        (res,rej)=>{

            res('CONTENIDO LEER ARCHIVO')

        }
    );
}
const promesaEscribirArchivo = () =>{
   return new Promise(
        (res,rej)=>{

           // res('CONTENIDO LEER ARCHIVO')
            rej('ERROR :(')

        }
    );
}


//ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {

console.log('1');

    try {
        console.log('2');
        const respuestaLecturaArchivo = await promesaLeerArchivo();
        console.log(respuestaLecturaArchivo);
        console.log('3');

        await promesaEscribirArchivo()// ---estaria escrito otra vez el archivo
        console.log('4');
        const nuevoContenido = await promesaLeerArchivo();
        console.log(nuevoContenido);
        console.log('5');



    }catch(error){

       console.error(error);

    }
    console.log('6');
    console.log('7');

}

const respuestaEjercicio = ejercicio();
//console.log('respuestaEjercicio',respuestaEjercicio);
//console.log('promesaLeerArchivo',promesaLeerArchivo());
//console.log('promesaEscribirArchivo',promesaEscribirArchivo());


/*
//flecha gorda

const f =  async() =>{
    //contenido
}*/