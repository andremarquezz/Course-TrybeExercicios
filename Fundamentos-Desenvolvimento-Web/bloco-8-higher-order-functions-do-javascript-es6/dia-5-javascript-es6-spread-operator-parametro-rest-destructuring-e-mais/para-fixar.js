const randomNumbers = [57, 8, 5, 800, 152, 74, 630, 98, 40];

//console.log(Math.max(...randomNumbers)); // 800 // sem pontos retorna NaN
//console.log(Math.min(...randomNumbers)); // 5 // sem pontos retorna NaN

// Faça uma lista com as suas frutas favoritas
const specialFruit = ['Banana', 'Morango', 'Manga'];

// Faça uma lista de complementos que você gostaria de adicionar
const additionalItens = ['Leite condensado'];

const fruitSalad = (fruit, additional) => [...fruit, ...additional]
;

//console.log(fruitSalad(specialFruit, additionalItens));
//Para-fixar 2//Juntar os dois objetos
const user = {
  name: 'Maria',
  age: 21,
  nationality: 'Brazilian',
};

const jobInfos = {
  profession: 'Software engineer',
  squad: 'Rocket Landing Logic',
  squadInitials: 'RLL',
};

const userInfo = {...user, ...jobInfos}

// console.log(userInfo)

//Array destructing

const saudacoes = ['Olá', (saudacao) => console.log(saudacao)];

saudacoes[1](saudacoes[0]); // Olá

// Produza o mesmo resultado acima, porém utilizando array destructuring

const [primeiroIndex] = saudacoes

console.log(primeiroIndex)

//A seguir, temos alguns valores que estão descritos em variáveis incoerentes. Através da desestruturação de arrays, corrija os valores das variáveis.
let comida = 'gato';
let animal = 'água';
let bebida = 'arroz';

console.log(comida, animal, bebida); // arroz gato água

// Utilizando array destructuring, faça com que os valores apareçam nas variáveis correspondentes ao seu verdadeiro tipo

const [comidaArray, animalArray, bebidaArray] = arrayItem

comidaArray = bebida;
animalArray = comida;
bebidaArray = animal;

console.log(arrayItem)