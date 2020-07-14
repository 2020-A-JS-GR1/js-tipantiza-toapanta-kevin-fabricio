var _this = this;
var kevin = {
    nombre: 'Fabricio',
    apellido: 'tipantiza',
    casado: false,
    sueldo: 11.2,
    estado: 'BN',
    imprimirUsuario: function (mensaje) {
        return 'el mensaje es: ' + mensaje;
    },
    calcularImpuesto: function (impuesto) {
        return _this.sueldo + _this.sueldo * impuesto;
    },
    estadoActual: function () {
        switch (_this.estado) {
            case 'AC':
                return 'AP';
            case 'IN':
                return 'AF';
            case 'BN':
                return 'AT';
        }
    }
};
kevin.imprimirUsuario("hola");
