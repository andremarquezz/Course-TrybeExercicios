const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'mysql',
  user: 'root',
  password: 'password',
  database: 'cep_lookup',
});

module.exports = connection;
