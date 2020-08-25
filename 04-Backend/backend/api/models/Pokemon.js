/**
 * Pokemon.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'string',
      required: true, // Por defecto es false
    },
    //RELACIONES

    //Pokemon <- Usuario

    usuario:{ //nombre FK
      model:'Usuario', //Modelo con el cual relacionamos
      required:true, //Requerido 1 - N
      //false   // ipcionak 0 - N (por defecto)
    },
    batallas:{
      collection: 'Batalla',
      via: 'pokemon'
    }

  },

};

