let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 0; index < numbers.length; index += 1) {
  console.log(numbers[index])
}
// Exercicio 2

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somanumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somanumbers += numbers[index]
}

console.log(somanumbers)

// Exercicio 3

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somanumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somanumbers += numbers[index]
}
let mediaAritmetica = (somanumbers / numbers.length)

console.log(mediaAritmetica);

// Exercicio 4

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let somanumbers = 0;
for (let index = 0; index < numbers.length; index += 1) {
  somanumbers += numbers[index]
}
let mediaAritmetica = (somanumbers / numbers.length)

if (mediaAritmetica > 20) {
  console.log("Valor mais que 20,  " + mediaAritmetica)
} else {
  console.log("Valor menor que 20,  " + mediaAritmetica)
}

// Exercicio 5
let maiorNumber = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] > maiorNumber) {
    maiorNumber = numbers[i]
  }
}
console.log(maiorNumber);

// Exercicio 6
let impares = 0;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] % 2 !== 0) {
    impares += 1;
  }
}
if (impares === 0) {
  console.log("Não tem impar manezin")
} else {
  console.log(impares)
}

// Exercicio 7
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menorNumber = numbers[0];
for (let i = 0; i < numbers.length; i += 1) {
  if (numbers[i] < menorNumber) {
    menorNumber = numbers[i]
  }
}
console.log(menorNumber)

// Exercicio 8

contagem = [];
for (let i = 0; i <= 25; i += 1) {
  contagem.push(i)
}
console.log(contagem)

// Exercicio 9

contagem = [0, 1, 2, 3, 4, 5, 6, 7,
  8, 9, 10, 11, 12, 13, 14, 15,
  16, 17, 18, 19, 20, 21, 22, 23,
  24, 25
];
for (let i = 0; i < contagem.length; i += 1) {
  console.log(contagem[i] / 2)
}