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
let impares = [];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let i = 0; i < numbers.length; i += 1) {
  if ((numbers[i] % 2) != 0) {
    impares.push = numbers[i]
  }
}
console.log(impares)