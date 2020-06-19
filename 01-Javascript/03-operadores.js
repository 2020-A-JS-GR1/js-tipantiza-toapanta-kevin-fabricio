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
       valorActual.nota= valorActual.nota+1;
       return valorActual;

    }
);

console.log('respuestaMap', respuestaMap)

const respuestaMapNuevo = arreglo.map(
    function (valorActual, indiceActual, arregloCompleto) {
       return  valorActual.nota;


    }
);

console.log('respuestaMapNuevo', respuestaMapNuevo);
console.log('arreglo', arreglo);

