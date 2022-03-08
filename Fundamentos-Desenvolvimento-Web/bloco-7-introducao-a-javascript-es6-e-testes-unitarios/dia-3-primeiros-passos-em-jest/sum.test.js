const {
  soma,
  myRemove,
  myFizzBuzz
} = require('./sum')

describe('Testes exercicio 1', () => {
  it('Testa se o retorno de soma(4, 5) é 9', () => {
    expect(soma(4, 5)).toEqual(9);
  })

  it('Testa se o retorno de sum(0, 0) é 0', () => {
    expect(soma(0, 0)).toEqual(0);
  })

  // Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
  it('Testa se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)', () => {
    expect(() => {
      soma(4, '5')
    }).toThrow("parameters must be numbers");
  })
})

describe('Testes exercicio 2', () => {
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toStrictEqual([1, 2, 4])
  })
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]', () => {
    expect(myRemove([1, 2, 3, 4], 3)).not.toContain(3)
  })
  it('Verifica se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado', () => {
    expect(myRemove([1, 2, 3, 4], 5)).toStrictEqual([1, 2, 3, 4])
  })
})

describe('Testes exercicio 3', () => {
  it('Uma chamada com um número divisível por 3 e 5 e o retorno é fizzbuzz', () => {
    expect(myFizzBuzz(105)).toEqual('fizzbuzz')
  })
  it('Uma chamada com um número divisível por 3 o retorno é fizz', () => {
    expect(myFizzBuzz(3)).toEqual('fizz')
  })
  it('Uma chamada com um número divisível por 5 o retorno é buzz', () => {
    expect(myFizzBuzz(5)).toEqual('buzz')
  })
  it('Uma chamada com um número que não é divisível por 3 ou 5', () => {
    expect(myFizzBuzz(4)).toEqual(4)
  })
  it('Uma chamada com um número parâmetro que não é um número ', () => {
    expect(myFizzBuzz('zero')).toBe(false)
  })
})