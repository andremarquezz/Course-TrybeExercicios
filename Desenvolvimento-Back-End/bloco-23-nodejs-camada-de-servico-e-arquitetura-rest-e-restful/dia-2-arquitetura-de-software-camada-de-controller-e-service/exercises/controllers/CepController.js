const CepServices = require('../services/CepServices');

const findCEP = async (req, res) => {
  const { cep } = req.params;
  const response = await CepServices.searchCEP(cep);
  if (response.message)
    return res.status(response.code).json({ message: response.message });
  return res.status(response.code).json(response.data);
};

module.exports = {
  findCEP,
};
