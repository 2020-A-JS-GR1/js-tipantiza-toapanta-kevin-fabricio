interface Usuario {
    nombre: string;
    apellido:string;
    edad?:number; //opcional
    sueldo?: number; //opcional
    casado:boolean;
    estado:'AC' | 'IN' | 'BN';
    imprimirUsuario: (mensaje: string) => string;  //sea una funcion

    //parametro numero impuesto, sueldo + sueldo * impuesto
    // no reciba parametros, 'AP','AF' 'AT'

    calcularImpuesto: (impuesto: number) => number;
    estadoActual: () => 'AP'|'AF'|'AT';



}

const kevin: Usuario | number = {
    nombre:'Fabricio',
    apellido:'tipantiza',
    casado: false,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario:(mensaje) => {
        return 'el mensaje es: '+ mensaje;
    },
    calcularImpuesto: (impuesto) =>{

       return this.sueldo + this.sueldo * impuesto;
    },
    estadoActual:() =>
    {
        switch (this.estado) {
            case 'AC':
                return 'AP'
            case 'IN':
                return 'AF'
            case 'BN':
                return 'AT'
        }

    }


}

kevin.imprimirUsuario("hola")
