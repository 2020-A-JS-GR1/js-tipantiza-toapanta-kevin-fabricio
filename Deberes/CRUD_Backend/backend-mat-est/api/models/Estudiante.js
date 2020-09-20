/**
 * Estudiante.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    nombre:{
      type: 'string',
    },
    codigo:{
      type: 'string',
    },
    repite:{
      type: 'string',

    },
    edad:{
      type: 'number',

    },
    nacionalidad:{
      type: 'string',

    },
  },

};

