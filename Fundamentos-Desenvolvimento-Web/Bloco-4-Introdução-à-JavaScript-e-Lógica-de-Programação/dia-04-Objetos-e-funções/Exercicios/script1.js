// Exercicio 1
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log('Bem vinda, ' + info.personagem)

// Exercicio 2

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

console.log(info)

// Exercicio 3

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for (let chave in info) {
  console.log(chave)
}
// Exercicio 4

let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim'
};

for (let chave in info) {
  console.log(info[chave])
}

// Exercicio 5 - Não feito - Levar pra Monitoria

let info = {
  personagem: 'Tio Patinhas',
  origem: 'Christmas on Bear Mountain',
  nota: 'O último MacPatinhas ',
  recorrente: 'Sim',
};
let infa = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  recorrente: 'Sim',
};
for (let allIn in info && infa) {
  console.log(info[allIn] && infa[allIn])
}

// Exercicio 6

let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [{
    titulo: 'O Pior Dia de Todos',
    autor: 'Daniela Kopsch',
    editora: 'Tordesilhas',
  }, ],
};

console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama ' + leitor.livrosFavoritos.titulo)