const mysql = require('mysql2/promise');

const connection = mysql.createPool({
  host: 'mysql',
  user: 'root', // Se necessário, substitua pelo seu usuário para conectar ao banco na sua máquina
  password: 'password', 
  database: 'rest_exercicios',
});

module.exports = connection;
