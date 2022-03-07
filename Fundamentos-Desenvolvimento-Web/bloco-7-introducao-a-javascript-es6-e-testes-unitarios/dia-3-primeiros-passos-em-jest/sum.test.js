const soma = require('./sum')

test('Testa se o retorno de soma(4, 5) é 9', () => {
  expect(soma(4, 5)).toEqual(9);
})