//Mutables e Inmutables


//MUTABLES
var numeroUno=1;
let numeroDos =2;
//se puede reasignar otro valor
numeroUno = 5;
numeroDos = 8;

numeroUno= false;
numeroDos = true;

//INMUTABLES

const configuracionArchivos = "PDF";
//configuracionArchivos ="XML";

//TIPOS DE VARIABLES

const numero =1; //Number
const sueldo =1.2; //Number
const texto ="Kevin"; //String
const booleano = false; //Boolean
const hijos = null; //Object
const zapatos = undefined; //undefined
const apellido = 'tipantiza' //String



console.log(typeof numero);
console.log(typeof sueldo);
console.log(typeof texto);
console.log(typeof booleano);
console.log(typeof hijos);
console.log(typeof zapatos);
console.log(typeof apellido);
//console.log(typeof NaN);

//console.log(typeof Number(value:"asd")); Transformar

//COMPARACIONES

if (true ==true) {
    console.log("Es verdadero");
}else{
    console.log("Es falso");
}

if ("") {
    console.log("Es verdadero");
}else{
    console.log("Es falsy"); //!
}

if ("kevin") {
    console.log("Es truty");
}else{
    console.log("Es falso");
}


if (-1) {
    console.log("Es truty"); //truty
}else{
    console.log("Es falso");
}
if (0) {
    console.log("Es truty");
}else{
    console.log("Es falso"); //falsy
}
if (1) {
    console.log("Es truty");//truty
}else{
    console.log("Es falso");
}

if (null) {
    console.log("Es truty");
}else{
    console.log("Es falso");//falsy
}


if (undefined) {
    console.log("Es truty");
}else{
    console.log("Es falso");//falsy
}


//ORDEN DE IMPORTANCIA
//1) const
//2) let
//3) x-> "var"


//OBJETOS JS (JSON)- arreglos

const kevin = {
    nombre: "kevin", //sintaaxis -> llave: valor
    "apellido": 'tipantiza',
    edad: 23,
    hijos:null,
    zapatos: undefined,
    casado: false,
    ropa: {
        color: 'rojo',
        talla:'40',
    },
    mascotas: ['cachetes','pequitas','panda']


}; //object

//PARA ACCEDER A LOS ELEMENTOS DEL OBJETO
kevin.nombre; //kevin
kevin.apellido; //tipantiza

//sintaxis tmabien para acceder a los valores
kevin["nombre"]; //kevin

console.log(kevin)
//sobrescribir una propiedad de un objeto
kevin.nombre = "Axel"; //

console.log(kevin);

kevin ["nombre"] ="kevin";
console.log(kevin);

kevin.sueldo; //undefined
console.log(kevin.sueldo) //undefined

//agregar propiedad al objeto

kevin.sueldo =1.2;
console.log(kevin.sueldo) //1.2
kevin ["gastos"] =0.8;
console.log(kevin.gastos); //0.8

//Eliminar una propiedad del objeto
kevin.nombre = undefined;
console.log(kevin);

delete kevin.nombre; //eliminar la llave "nombre"
console.log(kevin);

//OBTENER LAS LLAVES DE UN OBJETO
//console.log(Object.keys(kevin));
console.log(Object.values(kevin));
delete kevin.nombre;
//console.log(Object.keys(kevin));
console.log(Object.values(kevin));

//LISTA DE VARIBALES POR VALOR EN JS

//number
//string
//boolean
//undefined

let edadKevin = 23;
let edadVicente = edadKevin;
console.log(edadKevin); //23
console.log(edadVicente); //23

edadKevin = edadVicente + 1 ;
console.log(edadKevin); //24
console.log(edadVicente); //23


//LISTA DE VARIABLES POR REFERENCIA

/*let rafael = {
    nombre: "rafael",

}

let lenin = rafael;
console.log(rafael);
console.log(lenin);

lenin.nombre="Lenin";
console.log(rafael);
console.log(lenin);
delete rafael.nombre;
console.log(rafael);
console.log(lenin);*/

let rafael = {
    nombre: "rafael",

}

let lenin = Object.assign({},rafael);
// let lenin = Object.assign({},rafael);
console.log(rafael);
console.log(lenin);
lenin.nombre = "Lenin";
delete rafael.nombre;
console.log(rafael);
console.log(lenin);

let arregloClonado = Object.assign({},[1,2,3,4,5]);
console.log(arregloClonado);






/*
const arregloNumeros = []; //object

console.log(kevin);
console.log(arregloNumeros);
 */