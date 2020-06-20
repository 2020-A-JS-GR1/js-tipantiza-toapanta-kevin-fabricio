const arreglo = [
    {
        id:1,
        nombre: 'Adrian',
        nota: 5
    },
    {
        id:2,
        nombre: 'Vicente',
        nota: 8
    },
    {
        id:3,
        nombre: 'Carolina',
        nota: 14
    },
    {
        id:4,
        nombre: 'Wendy',
        nota: 16
    },
    {
        id:5,
        nombre: 'Andrea',
        nota: 19
    },
    {
        id:6,
        nombre: 'Pamela',
        nota: 19
    },
    {
        id:7,
        nombre: 'Cristian',
        nota: 20
    },
    {
        id:8,
        nombre: 'Daniel',
        nota: 19
    },
    {
        id:9,
        nombre: 'Lilly',
        nota: 14
    },
    {
        id:10,
        nombre: 'Ramiro',
        nota: 12
    }
];

//decalracion de arreglo con las vocaes a buscar
const vocales = ['a', 'e', 'i', 'o', 'u'];

const respuestaMap = arreglo.map(valorActual => {

        //contador
        var nuevaNota = 0;

        //recorrer los nombres para encontrar vocal
        // indexOf si no es -1  -- es vocal sino es consontante y se modifica la nota
        for (let iterator of valorActual.nombre){
            if (vocales.indexOf(iterator) != -1){
                nuevaNota += 0.1;
            }else{
                nuevaNota += 0.05;
            }

        }

        const nuevoElemento = {
            id: valorActual.id,
            nombre: valorActual.nombre,
            //suma de la nota que tenian + la nota de la suma de sus vocales y consonantes
            nota:valorActual.nota + nuevaNota,

        };

        return nuevoElemento;

});

console.log('NotaOriginal', arreglo)
console.log('NotaModificada', respuestaMap)

//filtrar el arreglo de objetos con los estudiantes que tuvieron mayor nota a 14 

const EstudiantesAprobados = respuestaMap.filter(element =>{
    return element.nota >= 14;
})

console.log('EstudiantesAprobados', EstudiantesAprobados)

