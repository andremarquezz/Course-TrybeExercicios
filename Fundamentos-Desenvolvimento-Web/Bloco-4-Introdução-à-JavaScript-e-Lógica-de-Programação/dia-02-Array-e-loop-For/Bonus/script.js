// Exercicio 1 bonus

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let ordenado = [];
for (j = 1; j < numbers.length; j += 1) {
  for (let i = 0; i < numbers.length - j; i += 1) {
    if (numbers[i] > numbers[j + 1]) {
      ordenado.push = numbers[j];
    }
  }
}
console.log(ordenado);