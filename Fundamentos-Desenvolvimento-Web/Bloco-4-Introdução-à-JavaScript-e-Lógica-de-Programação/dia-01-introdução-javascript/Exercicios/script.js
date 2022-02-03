// Exercicio 1
const a = 25;
const b = 10;
const c = 35;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
// Exercicio 2
if (a > b) {
  console.log(a)
} else {
  console.log(b)
}
// Exercicio 3
if (a > b) {
  console.log(a)
} else if (a < b && b > c) {
  console.log(b)
} else {
  console.log(c)
}
// Exercicio 4
const positive = 80
if (positive > 0) {
  console.log("Valor Positivo")
} else if (positive < 0) {
  console.log("Valor Negativo")
} else {
  console.log("Zero")
}
// Exercicio 5
const t1 = "z";
const t2 = 60;
const t3 = 60;

if ((t1 + t2 + t3) == 180) {
  console.log("É um triangulo familia! True")
} else if ((t1 + t2 + t3) > 180 || (t1 + t2 + t3) < 0) {
  console.log("Xii não é triangulo! False")
} else {
  console.log("Meu deus ta arrumando o que ?")
}
// Exercicio 6
let xadrez;
switch (xadrez) {
  case "bispo":
    console.log("diagonal");
    break;
  case "cavalo":
    console.log("Duas casas na horinzontal e uma na vertical");
    break;

  default:
    console.log("Estamos falando de xadrez manin")
}
// Exercicio 7

let nota;
if (nota >= 90) {
  console.log("A")
} else if (nota >= 80) {
  console.log("B")
} else if (nota >= 70) {
  console.log("C")
} else if (nota >= 60) {
  console.log("D")
} else if (nota >= 50) {
  console.log("E")
} else if (nota < 50) {
  console.log("F")
} else {
  console.log("Podia ter ficado em casa manin")
}
// Exercicio 8

const v1 = 10;
const v2 = 20;
const v3 = 30;

if ((v1 % 2) == 0)