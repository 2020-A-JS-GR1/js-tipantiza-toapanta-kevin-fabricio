const path = './Materias.txt';
const inquirer = require('inquirer');

async function main() {

    try {
        const respuesta = await inquirer
            .prompt([
                {
                    type:'rawlist',
                    name:'opcion',
                    message:'********MENU***************',
                    choices: ['Enstudiante', 'Materia']
                }
            ]);



        switch (respuesta.opcion) {
            case 'Enstudiante':
                menuEstudiante();
                break;
            case 'Materia':
                menuMateria();
                break;
        }

    }catch (e) {
        console.error(e);
    }


}

main();

//-----------------------------------------MENUS----------------------------------
async function menuEstudiante() {


    try {
        const respuestaE = await inquirer
            .prompt([
                {
                    type: 'rawlist',
                    name: 'opcion',
                    message: '********MENU***************',
                    choices: ['Mostrar Estudiante', 'Ingresas Estudiante', 'Modificar Estudiante', 'Eliminar Estudiante', 'Salir']
                }
            ]);


        const respuestaFinalE =  respuestaE.opcion;

        //Mandar Funcion
        ControlarEstudiante(respuestaFinalE)


    } catch (e) {
        console.error(e);
    }


}

async function menuMateria() {


    try {
        const respuestaM = await inquirer
            .prompt([
                {
                    type:'rawlist',
                    name:'opcion',
                    message:'********MENU***************',
                    choices: [ 'Mostrar Materias','Ingresas Materias', 'Modificar Materias','Eliminar Materias','Salir']
                }
            ]);

        const respuestaFinalM =  respuestaM.opcion;

        //Mandar Funcion
        ControlarMateria(respuestaFinalM)


    }catch (e) {
        console.error(e);
    }


}
//---------------------------------------FIN MENU-------------------------------------------

//--------------------------------------------ARCHIVOS------------------

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
const promesaSeleccionarMateriaEliminar = (materia) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'codMat',
            message: 'Seleccione una materia',
            choices: materia,
        });

}

const promesaSeleccionarEstudianteEliminar = (materia) => {
    return inquirer
        .prompt({
            type: 'list',
            name: 'codEs',
            message: 'Seleccione un Estudiante',
            choices: materia,
        });

}


const promesaEscribirMateria = (data) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                data,
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
}
const promesaEscribirEstudiante = (data,path) => {
    return new Promise(
        (resolve, reject) => {
            fs.writeFile(
                path,
                data,
                'utf-8',
                (error) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve();
                    }
                }
            );
        }
    );
}




//---------------------------------------------------------FIN ARCHIVO---------------------------------


//---------------------------------------------------------------------CONTROLAR MATERIA----------------------------------------
async function ControlarMateria (respuesta){

    if(respuesta == 'Ingresas Materias'){

        const respuestaM = await inquirer
            .prompt([
                {
                    type:'input',
                    name:'codigo',
                    message:'ingrese codigo de la materia'

                },
                {
                    type:'input',
                    name:'nombre',
                    message:'ingrese nombre de la materia',
                },
                {

                    type:'input',
                    name:'horario',
                    message:'ingrese horario de la materia(ej: 11-13)'
                },
                {
                    type:'input',
                    name:'precio',
                    message:'ingrese precio de la materia'
                },
                {
                    type:'input',
                    name:'periodo',
                    message:'ingrese periodo de la materia (ej: 2020A)'
                }
            ]);
        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        let listaMaterias = [];
        if (respuestaLecturaArchivo !== '') {
            listaMaterias = respuestaLecturaArchivo.split('\n').map(
                valorActual => {
                    return JSON.parse(valorActual);
                }
            );
        }
        //verificar si esta vacio o NO el archivo
        if (respuestaLecturaArchivo !== '') {
            await promesaEscribirMateria(respuestaLecturaArchivo + '\n' + JSON.stringify(respuestaM));
        } else {
            await promesaEscribirMateria(JSON.stringify(respuestaM));
        }

        menuMateria();


    }else if(respuesta == 'Mostrar Materias'){

        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        let listaMaterias = [];
        if (respuestaLecturaArchivo !== '') {
            listaMaterias = respuestaLecturaArchivo.split('\n').map(
                valorActual => {
                    return JSON.parse(valorActual);
                }
            );
        }

        console.log(listaMaterias);

        menuMateria();

    }else if(respuesta == 'Eliminar Materias'){

        const respuestaLecturaArchivo = await promesaLeerArchivo(path);
        let listaMaterias = [];

        if (respuestaLecturaArchivo !== '') {
            listaMaterias = respuestaLecturaArchivo.split('\n').map(
                valorActual => {
                    return   JSON.parse(valorActual);
                }
            );
        }

        const respuestaSelecBorrar = await promesaSeleccionarMateriaEliminar(listaMaterias.map(
            valorActual => {
                return valorActual.codigo;
            }
        ));
        //buscar si existe el codigo materia y lo elimina
        listaMaterias.splice(listaMaterias.findIndex(
            valorActual => {
                return valorActual.codigo === respuestaSelecBorrar.codMat;
            }
        ),1);

        //elementos borrados

        let listaBorrado = '';
        listaMaterias.map(
            (valorActual, indiceActual) => {
                if (indiceActual < listaMaterias.length - 1) {
                    listaBorrado = listaBorrado + JSON.stringify(valorActual) + '\n';
                } else {
                    listaBorrado = listaBorrado + JSON.stringify(valorActual);
                }

            }
        );

        await promesaEscribirMateria(listaBorrado);

        menuMateria();

    }else if(respuesta == 'Modificar Materias'){

        const respuestaLecturaArchivo = await promesaLeerArchivo(path);

        let listaMaterias = [];
        if (respuestaLecturaArchivo !== '') {
            listaMaterias = respuestaLecturaArchivo.split('\n').map(
                valorActual => {
                    return JSON.parse(valorActual);
                }
            );
        }
        //solo muestra codigo a modificar
        const respuestaSelecActualizar = await promesaSeleccionarMateriaEliminar(listaMaterias.map(
            valorActual => {
                return valorActual.codigo;
            }
        ));


        const respuesta = await inquirer
            .prompt([
                {
                    type:'list',
                    name:'mat',
                    message:'********MENU***************',
                    choices: ['codigo', 'nombre','horario','precio','periodo']
                }
            ]);

        let listaActualizada = '';

        switch (respuesta.mat) {
            case 'codigo':

                const respuestacod = await inquirer
                    .prompt([
                        {
                            type:'input',
                            name:'codigoActulizar',
                            message:'ingrese codigo de la materia'

                        }
                    ] );

                const id = listaMaterias.findIndex(
                    valorActual => {
                        return valorActual.codigo === respuestaSelecActualizar.codMat;
                    }
                );

                listaMaterias[id].codigo = respuestacod.codigoActulizar;



                listaMaterias.map(
                    (valorActual, indiceActual) => {
                        if (indiceActual < listaMaterias.length - 1) {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                        } else {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual);
                        }

                    }
                );

                await promesaEscribirMateria(listaActualizada);

                break;
            case 'nombre':

                const respuestaNom= await inquirer
                    .prompt([
                        {
                            type:'input',
                            name:'nomActulizar',
                            message:'ingrese nombre de la materia'

                        }
                    ] );

                const id_nombre = listaMaterias.findIndex(
                    valorActual => {
                        return valorActual.codigo === respuestaSelecActualizar.codMat;
                    }
                );

                listaMaterias[id_nombre].nombre = respuestaNom.nomActulizar;



                listaMaterias.map(
                    (valorActual, indiceActual) => {
                        if (indiceActual < listaMaterias.length - 1) {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                        } else {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual);
                        }

                    }
                );

                await promesaEscribirMateria(listaActualizada);

                break;
            case 'horario':

                const respuestahorario= await inquirer
                    .prompt([
                        {
                            type:'input',
                            name:'horarioActulizar',
                            message:'ingrese horario de la materia'

                        }
                    ] );

                const id_horario = listaMaterias.findIndex(
                    valorActual => {
                        return valorActual.codigo === respuestaSelecActualizar.codMat;
                    }
                );

                listaMaterias[id_horario].horario = respuestahorario.horarioActulizar;

                listaMaterias.map(
                    (valorActual, indiceActual) => {
                        if (indiceActual < listaMaterias.length - 1) {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                        } else {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual);
                        }

                    }
                );

                await promesaEscribirMateria(listaActualizada);

                break;
            case'precio':

                const respuestaPrecio= await inquirer
                    .prompt([
                        {
                            type:'input',
                            name:'precioActulizar',
                            message:'ingrese precio de la materia'

                        }
                    ] );

                const id_precio = listaMaterias.findIndex(
                    valorActual => {
                        return valorActual.codigo === respuestaSelecActualizar.codMat;
                    }
                );

                listaMaterias[id_precio].precio = respuestaPrecio.precioActulizar;

                listaMaterias.map(
                    (valorActual, indiceActual) => {
                        if (indiceActual < listaMaterias.length - 1) {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                        } else {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual);
                        }

                    }
                );

                await promesaEscribirMateria(listaActualizada);

                break;
            case  'periodo':


                const respuestaPeriodo= await inquirer
                    .prompt([
                        {
                            type:'input',
                            name:'periodoActulizar',
                            message:'ingrese valor de la materia'

                        }
                    ] );

                const id_periodo = listaMaterias.findIndex(
                    valorActual => {
                        return valorActual.codigo === respuestaSelecActualizar.codMat;
                    }
                );

                listaMaterias[id_periodo].periodo = respuestaPeriodo.periodoActulizar;


                listaMaterias.map(
                    (valorActual, indiceActual) => {
                        if (indiceActual < listaMaterias.length - 1) {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                        } else {
                            listaActualizada = listaActualizada + JSON.stringify(valorActual);
                        }

                    }
                );

                await promesaEscribirMateria(listaActualizada);

                break;
        }


        menuMateria();

    }else if (respuesta == 'Salir'){
        main();
    }


}

//-------------------FIN CONTROLAR MATERIA------------------------


//----------------------------------------------------------------------------CONTROLAR ESTUDIANTE---------------------------------


async function ControlarEstudiante (respuesta) {
    const respuestaLecturaArchivoEstudiante = await promesaLeerArchivo('./Estudiantes.txt');
    let listaEstudiantes = [];
    if (respuestaLecturaArchivoEstudiante !== '') {
        listaEstudiantes = respuestaLecturaArchivoEstudiante.split('\n').map(
            valorActual => {
                return JSON.parse(valorActual);
            }
        );
    }


    switch (respuesta) {

        case 'Mostrar Estudiante':
            const respuestaLecturaArchivo = await promesaLeerArchivo('./Estudiantes.txt');
            let listaMaterias = [];
            if (respuestaLecturaArchivo !== '') {
                listaMaterias = respuestaLecturaArchivo.split('\n').map(
                    valorActual => {
                        return JSON.parse(valorActual);
                    }
                );
            }

            console.log(listaMaterias);

            menuEstudiante();


            break;
        case 'Ingresas Estudiante':

            const respuestaE = await inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'codigo',
                        message: 'ingrese codigo de la Estudiante'

                    },
                    {
                        type: 'input',
                        name: 'nombre',
                        message: 'ingrese nombre de la Estudiante',
                    },
                    {

                        type: 'input',
                        name: 'repite',
                        message: 'ingrese repite Estudiante ? (Ejemplo: true/false)'
                    },
                    {
                        type: 'input',
                        name: 'edad',
                        message: 'ingrese edad del Estudiante'
                    },
                    {
                        type: 'input',
                        name: 'nacionalidad',
                        message: 'ingrese Nacionalidad'
                    }
                ]);


            //verificar si esta vacio o NO el archivo
            if (respuestaLecturaArchivoEstudiante !== '') {
                await promesaEscribirEstudiante(respuestaLecturaArchivoEstudiante + '\n' + JSON.stringify(respuestaE), './Estudiantes.txt');
            } else {
                await promesaEscribirEstudiante(JSON.stringify(respuestaE), './Estudiantes.txt');
            }

            menuEstudiante();

            break;
        case 'Modificar Estudiante':


            //solo muestra codigo a modificar
            const respuestaSelecActualizar = await promesaSeleccionarEstudianteEliminar(listaEstudiantes.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));


            const respuesta = await inquirer
                .prompt([
                    {
                        type: 'list',
                        name: 'estu',
                        message: '********MENU***************',
                        choices: ['codigo', 'nombre', 'repite', 'edad', 'nacionalidad']
                    }
                ]);

            let listaActualizada = '';

            switch (respuesta.estu) {
                case 'codigo':

                    const respuestacodE = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'codigoActulizar',
                                message: 'ingrese codigo del estudiante'

                            }
                        ]);

                    const id = listaEstudiantes.findIndex(
                        valorActual => {
                            return valorActual.codigo === respuestaSelecActualizar.codEs;
                        }
                    );

                    listaEstudiantes[id].codigo = respuestacodE.codigoActulizar;


                    listaEstudiantes.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaEstudiantes.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );

                    await promesaEscribirEstudiante(listaActualizada,'./Estudiantes.txt');

                    break;
                case 'nombre':


                    const respuestaNom = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'nomActulizar',
                                message: 'ingrese nombre del Estudiante'

                            }
                        ]);

                    const id_nombre = listaEstudiantes.findIndex(
                        valorActual => {
                            return valorActual.codigo === respuestaSelecActualizar.codEs;
                        }
                    );

                    listaEstudiantes[id_nombre].nombre = respuestaNom.nomActulizar;


                    listaEstudiantes.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaEstudiantes.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );

                    await promesaEscribirEstudiante(listaActualizada,'./Estudiantes.txt');

                    break;
                case 'repite':

                    const respuestahorario = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'horarioActulizar',
                                message: 'ingrese si repite el estudiante (true/false)'

                            }
                        ]);

                    const id_horario = listaEstudiantes.findIndex(
                        valorActual => {
                            return valorActual.codigo === respuestaSelecActualizar.codEs;
                        }
                    );

                    listaEstudiantes[id_horario].repite = respuestahorario.horarioActulizar;

                    listaEstudiantes.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaEstudiantes.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );

                    await promesaEscribirEstudiante(listaActualizada,'./Estudiantes.txt');

                    break;
                case'edad':
                    console.log('nuevo valor')
                    const respuestaPrecio = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'precioActulizar',
                                message: 'ingrese edad del estudiante'

                            }
                        ]);

                    const id_precio = listaEstudiantes.findIndex(
                        valorActual => {
                            return valorActual.codigo === respuestaSelecActualizar.codEs;
                        }
                    );

                    listaEstudiantes[id_precio].edad = respuestaPrecio.precioActulizar;

                    listaEstudiantes.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaEstudiantes.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );

                    await promesaEscribirEstudiante(listaActualizada,'./Estudiantes.txt');

                    break;
                case  'nacionalidad':


                    const respuestaPeriodo = await inquirer
                        .prompt([
                            {
                                type: 'input',
                                name: 'periodoActulizar',
                                message: 'ingrese nacionalidad del Estudiante'

                            }
                        ]);

                    const id_periodo = listaEstudiantes.findIndex(
                        valorActual => {
                            return valorActual.codigo === respuestaSelecActualizar.codEs;
                        }
                    );

                    listaEstudiantes[id_periodo].nacionalidad = respuestaPeriodo.periodoActulizar;


                    listaEstudiantes.map(
                        (valorActual, indiceActual) => {
                            if (indiceActual < listaEstudiantes.length - 1) {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual) + '\n';
                            } else {
                                listaActualizada = listaActualizada + JSON.stringify(valorActual);
                            }

                        }
                    );

                    await promesaEscribirEstudiante(listaActualizada,'./Estudiantes.txt');

                    break;
            }

            menuEstudiante();


        case 'Eliminar Estudiante':

            const respuestaSelecBorrar = await promesaSeleccionarEstudianteEliminar(listaEstudiantes.map(
                valorActual => {
                    return valorActual.codigo;
                }
            ));
            //buscar si existe el codigo materia y lo elimina
            listaEstudiantes.splice(listaEstudiantes.findIndex(
                valorActual => {
                    return valorActual.codigo === respuestaSelecBorrar.codEs;
                }
            ),1);

            //elementos borrados

            let listaBorrado = '';
            listaEstudiantes.map(
                (valorActual, indiceActual) => {
                    if (indiceActual < listaEstudiantes.length - 1) {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual) + '\n';
                    } else {
                        listaBorrado = listaBorrado + JSON.stringify(valorActual);
                    }

                }
            );

            await promesaEscribirEstudiante(listaBorrado,'./Estudiantes.txt');


            menuEstudiante();

            break;

        case 'Salir':
            main();
            break;





    }
}