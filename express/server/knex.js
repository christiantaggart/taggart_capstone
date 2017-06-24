// THIS FILE USED TO BE NAMED db.js

// module.exports = require('knex')(require('./knexfile')[process.env.NODE_ENV || 'development'])

'use strict';

const environment = process.env.NODE_ENV || 'development';
const knexConfig = require('./knexfile')[environment];
const knex = require('knex')(knexConfig);

module.exports = knex;
