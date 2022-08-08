const connection = require('./connection');

const getOneCEP = async (cep) => {
  let query = `
  SELECT * FROM ceps
  WHERE cep = ?
  `;
  const [data] = await connection.execute(query, [cep]);
  return data;
};

module.exports = {
  getOneCEP,
};
