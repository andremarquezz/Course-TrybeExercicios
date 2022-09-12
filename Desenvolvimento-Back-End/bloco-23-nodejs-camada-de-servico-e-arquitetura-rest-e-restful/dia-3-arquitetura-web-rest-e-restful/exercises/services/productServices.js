const { CustomErrors } = require('../errors/CustomError');
const ProductModel = require('../models/productModel');

const getAll = () => {
  const data = await ProductModel.getAll();
  if (!data) throw new CustomErrors('Produtos não encontrado', 404)
  const response = { code: 200, data }
  return response
}