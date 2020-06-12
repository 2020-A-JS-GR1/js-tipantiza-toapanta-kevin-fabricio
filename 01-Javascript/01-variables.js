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
