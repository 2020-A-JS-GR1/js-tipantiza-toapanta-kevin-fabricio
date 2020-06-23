const arreglo = [
    {
        id:1,
        nombre:'kevin',
        nota: 5
    },
    {
        id:2,
        nombre:'pedro',
        nota: 6
    },
    {
        id:3,
        nombre:'fabricio',
        nota: 7
    },
    {
        id:4,
        nombre:'enrique',
        nota: 8
    },
    {
        id:5,
        nombre:'cristian',
        nota: 9
    },
    {
        id:6,
        nombre:'carlos',
        nota: 14
    },
    {
        id:7,
        nombre:'jose',
        nota: 14
    },{
        id:8,
        nombre:'daniel',
        nota: 12
    },
    {
        id:9,
        nombre:'jair',
        nota: 7
    },{
        id:10,
        nombre:'pamela',
        nota: 10
    },
]

//FUNCIONES COMO PARAMETROS

//FIND
// devolver una expresion -> TRUTY FALSY

const respuestaFind = arreglo.find(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual',valorActual);
        console.log('indiceActual',indiceActual);
        console.log('valorCompleto',arregloCompleto);

        return valorActual.nombre ==="jair";

    }
);

console.log('respuesatFind', respuestaFind) //undefined


//FINDINDEX
// devolver una expresion -> TRUTY FALSY

const respuestaIndex = arreglo.findIndex(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual',valorActual);
        console.log('indiceActual',indiceActual);
        console.log('valorCompleto',arregloCompleto);

        return valorActual.nombre ==="jair";

    }
);

console.log('respuesatIndex', respuestaIndex) //undefined


//FOREACH -- solo para iterar
const respuestaForEach = arreglo.forEach(
    function (valorActual, indiceActual, arregloCompleto) {
        console.log('valorActual',valorActual);
        console.log('indiceActual',indiceActual);
        console.log('valorCompleto',arregloCompleto);

    }
);

console.log('respuestaForEach', respuestaForEach) //undefined


//MAP-- MODIFCAR EL ARREGLO O CREAR UN NUEVO ARREGLO
//devolver el nuevo elemento

const respuestaMap = arreglo.map(
    function (valorActual, indiceActual, arregloCompleto) {
      const nuevoElemento = {
          id: valorActual.id,
          nombre: valorActual.nombre,
          nota:valorActual.nota+1

      };

       return nuevoElemento;

    }
);

console.log('respuestaMap', respuestaMap)
console.log('arreglo', arreglo)

const respuestaMapNuevo = arreglo.map(
    //funcion anonima -> no tiene nombre
    // funcion de flacha gorda
    function (valorActual, indiceActual, arregloCompleto) {
       return  valorActual.nota;


    }
);

console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

//FILTER
//DEVOLVER EXPRESION TRUTY FALSY
const respuestaFilter = arreglo.filter(

    (valorActual, indiceActual, arregloCompleto) =>{
        return  valorActual.nota >=14;


    }
);

console.log('respuestaFilter', respuestaFilter);
console.log('arreglo', arreglo);

//some -> expresion
//devuelve BOOLEANO
//HAY ALGUNA NOTA MENORES A NUEVE ? SI NO

//OR
const respuestaSome = arreglo.some(
    (valorActual, indiceActual, arregloCompleto) =>{
        return valorActual.nota < 9;
    }
);

console.log('respuestaSome', respuestaSome);

//EVERY -> expresion
//devuelve BOOLEANO
//TODAS LAS NOTAS SON MAYORES A 14? SI NO


//AND


const respuestaEvery = arreglo.every(
    (valorActual, indiceActual, arregloCompleto) =>{
        return valorActual.nota > 14;
    }
);

console.log('respuestaEvery', respuestaAny);










