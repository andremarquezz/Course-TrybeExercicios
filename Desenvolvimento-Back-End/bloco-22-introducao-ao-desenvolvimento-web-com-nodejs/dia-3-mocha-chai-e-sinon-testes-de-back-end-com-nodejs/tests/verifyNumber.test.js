const { expect } = require('chai');
const { verifyNumber } = require('./verifyNumber');

describe('Verifica se um número é positivo, negativo ou neutro', () => {
  describe('Verifica se o numero é positivo', () => {
    const response = verifyNumber(5)
    expect(response).to.be.a('Positivo')
  });
    describe('Verifica se o numero é negativo', () => {
      const response = verifyNumber(-2);
      expect(response).to.be.a('Negativo');
    });
    describe('Verifica se igual a 0 retorna neutro', () => {
      const response = verifyNumber(0);
      expect(response).to.be.a('Neutro');
    });
});
