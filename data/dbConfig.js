//database connection
const knex = require("knex");
const knexConfig = require("../knexfile.js"); // { development }

const db = knex(knexConfig.development);  //which config key should i pick?

module.exports = db;