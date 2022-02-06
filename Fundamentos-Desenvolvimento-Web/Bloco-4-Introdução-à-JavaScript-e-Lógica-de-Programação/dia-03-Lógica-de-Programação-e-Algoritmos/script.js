// Exercicio 1
let fatorial = 10
let resultado = fatorial

for (let i = 1; i < fatorial; i += 1) {
  resultado *= i
}
console.log(resultado)

// Exercicio 2

let word = "Sexta finalmente";
console.log(word.split('').reverse().join(''));

// Exercicio 3

let array = ['java', 'javascript', 'python', 'html', 'css'];
let bigWord = "";

for (let i = 0; i < array.length; i += 1) {
  if (array[i].length > bigWord.length) {
    bigWord = array[i]
  }
}
console.log(bigWord)

// Exercicio 3