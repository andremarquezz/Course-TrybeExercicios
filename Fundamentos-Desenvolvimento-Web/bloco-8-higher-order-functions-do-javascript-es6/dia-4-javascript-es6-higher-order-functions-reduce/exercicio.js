//1 - Dada uma matriz, transforme em um array.
const arrays = [
  ['1', '2', '3'],
  [true],
  [4, 5, 6],
];

//  Gambiarra full dps de 1hr

const flatten = () => {
  const valor = arrays.reduce((acumulador, valorAtual) => `${acumulador} ${valorAtual}`);
  const agoraVai = valor.split(' ').join(',');
  return agoraVai.split(',')
}
// console.log(flatten())
//  Gabarito

const gabarito = () => arrays.reduce((acumulador, valorAtual) =>(acumulador.concat(valorAtual)), []);

// console.log(gabarito())

//  Para os exercicios 2,3,4
const books = [{
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

// Adicione o código do exercício aqui:
// 2- 2 - Crie uma string com os nomes de todas as pessoas autoras.
const autores = () => books.reduce((accumulator, currentValue) => accumulator.concat(currentValue.author.name), '');
// console.log(autores())

// 3 - Calcule a média de idade que as pessoas autoras tinham quando seus respectivos livros foram lançados.

const idadeMedia = () => {
  const idadeTotal = books.reduce((accumulator, currentValue) => (accumulator + currentValue.releaseYear - currentValue.author.birthYear), 0)
  return idadeTotal / books.length
}

console.log(idadeMedia())