const CepModel = require('../models/CepModel');

const verifyCEP = (cep) => {
  const err = {
    code: 400,
    message: 'CEP inválido',
  };
  const regexCep = /^\d{5}-?\d{3}$/;
  const cepIsValid = regexCep.test(cep);
  if (!cepIsValid) return err;
  return false;
};

const searchCEP = async (cep) => {
  const invalidCEP = verifyCEP(cep);
  if (invalidCEP.code) return invalidCEP;
  const data = await CepModel.getOneCEP(cep);
  const response = { code: 200, data };
  return response;
};

module.exports = {
  searchCEP,
};
