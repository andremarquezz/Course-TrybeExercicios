// .push() adiciona um novo item no final do array.

//   Se precisarmos adicionar no início, podemos usar o.unshift()

//   .pop() nos permite remover o último item do array.

//   remover o primeiro item da lista, podemos usar o.shift()

// indexOf(), usado para procurar o índice de um item no Array

// Exercicio 1

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let menuServices = menu[1];

console.log(menuServices);

// Exercicio 2

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];
let indexOfPortfolio = menu.length;

console.log(indexOfPortfolio);

// Exercicio 3

let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push("Contato");

console.log(menu);

// FOR - Exercicio 1 - 

let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for (var index = 0; index < groceryList.length; index += 1) {
  console.log(groceryList[index] + " É sobre isso e ta tudo bem")
}

// FOR/OF - Exercicio 1 - 

let names = ['João', 'Maria', 'Antônio', 'Margarida'];
for (let cria of names) {
  console.log(cria)
};