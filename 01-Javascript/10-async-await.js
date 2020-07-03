const promesaLeerArchivo = new Promise();
const promesaEscribirArchivo = new Promise();


//ASYNC AWAIT -> DENTRO DE UNA FUNCION
async function ejercicio() {

console.log('1');

    try {
        const respuestaLecturaArchivo = await promesaLeerArchivo();
        await promesaEscribirArchivo()// ---estaria escrito otra vez el archivo
        const nuevoContenido = await promesaLeerArchivo();

        console.log(nuevoContenido);


    }catch(error){

       console.error(error);

    }

}

//flecha gorda

const f =  async() =>{
    //contenido
}