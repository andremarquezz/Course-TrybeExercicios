// Somar Array numeros pares
const numbers = [18, 19, 23, 53, 4, 5, 76, 23, 54];

const filtraPares = () => numbers.filter((number) => number % 2 === 0);

const soma = filtraPares().reduce((acumulador, valorArray) => acumulador + valorArray);
console.log(soma) //152