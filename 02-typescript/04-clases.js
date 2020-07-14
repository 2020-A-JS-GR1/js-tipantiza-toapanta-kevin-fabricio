class Persona {
    constructor(nombreParametro, apellidoParametro) {
        this.nombreYapellido = ' ';
        this.nombre = nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYapellido = this.nombre + ' ' + this.apellido;
    }
    mostrarNombreApellido() {
        return this.nombreYapellido;
    }
}
Persona.nombreReferencial = 'Humano';
class Usuario extends Persona {
    constructor(nombreParametro, apellidoParametro, cedula, estadoCivil) {
        super(nombreParametro, apellidoParametro);
        this.cedula = cedula;
        this.estadoCivil = estadoCivil;
    }
}
const kevin = new Usuario("kevin", "tipantiza", "1718935784", "soltero");
console.log(kevin.nombre);
console.log(kevin.apellido);
console.log(kevin.cedula);
console.log(kevin.estadoCivil);
console.log(kevin);
