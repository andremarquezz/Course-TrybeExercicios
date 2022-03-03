function testingScope(escopo) {
  if (escopo === true) {
    var ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    var elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
  console.log(ifScope + ' o que estou fazendo aqui ? :O'); // Se necessário esta linha pode ser removida.
}

testingScope(true);

// 1 - Faça as modificações necessárias na função para que o seu comportamento respeite o escopo no qual cada variável foi declarada.
function testingScope(escopo) {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}
testingScope(true);
// 2 - Modifique a estrutura da função para que ela seja uma arrow function.
const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = ifScope + ' ótimo, fui utilizada no escopo !';
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);
// 3 - Modifique as concatenações para template literals.

const testingScope = (escopo) => {
  if (escopo === true) {
    let ifScope = 'Não devo ser utilizada fora do meu escopo (if)';
    ifScope = `${ifScope}, ${'ótimo, fui utilizada no escopo!'}`
    console.log(ifScope);
  } else {
    let elseScope = 'Não devo ser utilizada fora meu escopo (else)';
    console.log(elseScope);
  }
}

testingScope(true);

//1 - Faça uma função que retorne o array oddsAndEvens em ordem crescente.
// https://www.alura.com.br/artigos/ordenacao-de-numeros-no-javascript-nao-funciona
const oddsAndEvens = [13, 3, 4, 10, 7, 2];

const comparaNumeros = (a, b) => {
  if (a === b) {
    return 0;
  } else if (a < b) {
    return -1;
  } else {
    return 1;
  }
}
let ordemCrescente = oddsAndEvens.sort(comparaNumeros);
console.log(ordemCrescente);

//  Forma Simplificada
const oddsAndEvens = [13, 3, 4, 10, 7, 2];
let ordemCrescente = (oddsAndEvens.sort((a, b) => a - b));
console.log(ordemCrescente)

// 2 - Utilize template literals para que a chamada console.log( < seu código > oddsAndEvens < seu código > ); retorne "Os números 2,3,4,7,10,13 se encontram ordenados de forma crescente!".
console.log(`${'Os numeros'} ${ordemCrescente} ${'se encontram em ordem crescente!!'}`)

//3 - Bônus(opcional): tente fazer o mesmo exercício utilizando o método array.sort().Spoiler: É possível realizar uma função que ordene qualquer array de números.

// Foi a forma que eu fiz no exercicio 1.

// 1 - Crie uma função que receba um número e retorne seu fatorial.
// https://www.youtube.com/watch?v=Wr38_yypPdE&ab_channel=Leo-CoffeeTag
// Number.isInteger Npara verdadeiro ou falso numero inteiro

// Forma 1
function fatorial(n) {
  if (n === 0) {
    return 1
  } else {
    return n * fatorial(n - 1);;
  }
}

// Forma 020

const fatorial = (n) => (n > 1) ? n * fatorial(n - 1) : 1;

fatorial(5)


// 2 - Crie uma função que receba uma frase e retorne qual a maior palavra.

// const frasePalavra = (frase) => {
//   let maiorPalavra = frase.split(' ')
//   for (let i = 0; i < maiorPalavra.length; i += 1) {
//     if (maiorPalavra < #) {
//       maiorPalavra = #;
//     }
//   }
//   return maiorPalavra
// }

// console.log(frasePalavra('meu amigo cachorro'))

/* 3 -Crie uma página que contenha:
a) Um botão ao qual será associado um event listener;
b) Uma variável clickCount no arquivo JavaScript que acumule o número de clicks no botão;
c) Um campo no HTML que vá atualizando a quantidade de clicks no botão conforme a variável clickCount é atualizada*/

// 4 - Crie um código JavaScript com a seguinte especificação:
// a) Função 1 : Escreva uma função que vai receber uma string como parâmetro. Sua função deverá procurar pela letra x em uma string qualquer que você determinar e substituir pela string que você passou como parâmetro. Sua função deve retornar essa nova string .

// b) Um array com escopo global, que é o escopo do arquivo JS , nesse caso, contendo cinco strings com suas principais skills .

// c) Função 2 : Escreva uma função que vai receber a string retornada da Função 1 como parâmetro. Essa função deve concatenar as skills do array global à string que foi passada para a Função 2 via parâmetro. Você deve ordenar os skills em ordem alfabética. Sua função deve retornar essa nova string .