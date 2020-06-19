const arreglo = [6,7,8,9,10];
//arreglo = 1;
/*
let cualquierCosa = "ASD";
cualquierCosa =1;
cualquierCosa= true;
cualquierCosa = undefined;
cualquierCosa = null;
cualquierCosa = {};
cualquierCosa = [];
console.log(cualquierCosa);
*/

const arregloTodo = [
    true,1,1.2,"kevin",undefined,null,{},[1,2,true,"A"]
];
 let a = [1,2,3];
 const b = Object.assign([],a);

 //for of
for (let numero of arreglo){ //VALORES
    console.log('numero', numero);
}

//for in
for (let numero in arreglo){ //INDICES
   //areglo[indices];
    console.log('numero', numero);
}

//const arreglo = [6,7,8,9,10];

arreglo.push(11);//añadir al final un elemento
arreglo.pop(); //Eliminar al final un elemento
arreglo.unshift(5);//añadir al principio del arreglo

arreglo.splice(0,1); //donde comienza a eliminar, cuantos va a eliminar

arreglo.splice(0, 0,3,4,5) // donde comienza, no se elimina ninguno , valores para agregar


//buscar el indice de un elemento
const indice= arreglo.indexOf(9);
console.log('indice', indice) // 6

arreglo.splice(indice,1);
