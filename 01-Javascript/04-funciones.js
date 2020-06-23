function soloNumeros(a,b,c) {

    return a - b + c;
}


function soloLetras(a,b,c){
    console.log(a,b,c);
}

soloNumeros('v',true, [1,2,3]);
soloNumeros();
soloNumeros(1,2,3,4,5,6,78,9);


//FUNCIONES NOMBRADAS

function funcionNombrada() {

}
funcionNombrada();

const funcionNombradaDos = function () {}; //funciones sin nombre o anonima

var funcionNombradaTres = function () {};//funciones sin nombre o anonima

let funcionNombradaCuatro = function opcional() {};//funciones sin nombre o anonima

funcionNombradaDos();
funcionNombradaTres();
funcionNombradaCuatro();

//opcional(); NO EXISTO


const funcionNombradaCinco = () =>{} //FAT ARROW FUNCTIONS

const funcionNombradaSeis = (x) =>{
    returnx+1
} //FAT ARROW FUNCTIONS


const funcionNombradaSiete= (x) => x+1 //FAT ARROW FUNCTIONS
                                    //una sola linea, omito retinr, omito llaves

const funcionNombradaOcho = x => x+1 // Tengo un solo parametros, omito los parentesis

const funcionNombradaNueve = (x,y,z) => x+y+z; //tengo varios parametros, es reuqerido el uso de paretesis


function sumarNumeros(numeroInicial, ...otrosNumeros)  //parametros inf --  devuelven un arreglo []
{

    return numeroInicial + otrosNumeros.reduce((a,v) => a + v, 0)


}

sumarNumeros(1,2,3,4,5,6,7,8,9,10);


const arreglo = [0, 1, 2];

function sumarArreglo(arregloParametro) {
    const clonArreglo = Object.assign([],arregloParametro);
    clonArreglo[0] = 100;
    return clonArreglo;
}

console.log(sumarArreglo(arreglo));
console.log('arreglo', arreglo);
