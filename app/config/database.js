const knex = require('knex');
const user = process.env.DB_USER;
const pass = process.env.DB_PASS;
const host = process.env.DB_HOST;
const port = process.env.DB_PORT;
const db = process.env.DB_NAME;

console.log(`postgres://${user}:${pass}@${host}:${port}/${db}`);

module.exports = knex({
    client: 'pg',  //indica que se usara postgres como motor de BD
    connection: `postgres://${user}:${pass}@${host}:${port}/${db}`, //cadena de conexion
    pool: { min: 1, max: 2 },
    acquireConnectionTimeout: 5000,
  });