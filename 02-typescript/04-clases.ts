class Persona {
    public nombre:string;
    public apellido:string;
    static nombreReferencial:string = 'Humano';
    protected nombreYapellido:string = ' ';

    constructor(nombreParametro:string, apellidoParametro:string) {

        this.nombre= nombreParametro;
        this.apellido = apellidoParametro;
        this.nombreYapellido = this.nombre + ' '+this.apellido
    }


    private mostrarNombreApellido (): string{
        return this.nombreYapellido;
    }


}

class Usuario extends Persona{
    constructor(nombreParametro:string, apellidoParametro:string, public cedula:string, public estadoCivil:string) {
        super(nombreParametro, apellidoParametro);
    }
}

const kevin = new Usuario("kevin","tipantiza","1718935784","soltero")

console.log(kevin.nombre);
console.log(kevin.apellido);
console.log(kevin.cedula);
console.log(kevin.estadoCivil);
console.log(kevin)