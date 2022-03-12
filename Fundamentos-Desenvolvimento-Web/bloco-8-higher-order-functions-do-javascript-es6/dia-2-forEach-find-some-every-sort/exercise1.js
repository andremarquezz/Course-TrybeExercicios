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
// 1- Encontre o nome da primeira pessoa autora do livro nascida no ano de 1947.

// function authorBornIn1947() {
//   const autorNascido = books.find((element) => element.author.birthYear === 1947).author.name
//   return autorNascido
// }

// console.log(authorBornIn1947());

// Retorne o nome do livro de menor nome.Dica: use a função forEach.

// function smallerName() {
//   let nameBook;
//   books.forEach((element) => {
//     // !namebook serve para receber o primeiro elemento na variavel - Andre Macedo
//     if (!nameBook || element.name.length < nameBook.length) {
//       nameBook = element
//     }
//   })
//   return nameBook;
// }

// console.log(smallerName())

// 3-Encontre o primeiro livro cujo nome possui 26 caracteres.


// function getNamedBook() {
//   return books.find((element) => element.name.length === 26)
// }

// console.log(getNamedBook());

// 4- Ordene os livros por data de lançamento em ordem decrescente.

// const ordemDecrescente = books.sort((a, b) => b.releaseYear - a.releaseYear)

// console.log(ordemDecrescente)

// 5- Faça uma função que retorne true , se todas as pessoas autoras nasceram no século XX, ou false , caso contrário.

// const verificaSeculo = books.every((element) => element.author.birthYear >= 1901 && element.author.birthYear <= 2001)
// console.log(verificaSeculo)

// 6-  Faça uma função que retorne true , se algum livro foi lançado na década de 80, e false , caso contrário.
// function someBookWasReleaseOnThe80s() {
//   const verificaDecada = books.some((element) => element.releaseYear >= 1980 && element.releaseYear <= 1989)
//   return verificaDecada
// }
// console.log(someBookWasReleaseOnThe80s())


function authorUnique() {
  let ano;
  books.forEach((element) => if (element.birthYear ===  ) {
    
  })
}

console.log(authorUnique())