const soma = require('./sum')

TestWatcher('Testa se o retorno de soma(4, 5) é 9', () => {
  expect(soma(4, 5)).toEqual(9);
})