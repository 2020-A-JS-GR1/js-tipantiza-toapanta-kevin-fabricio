/**
 * Materia.js
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
    horario:{
      type: 'string',

    },
    precio:{
      type: 'number',

    },
    periodo:{
      type: 'string',

    },

  },

};

