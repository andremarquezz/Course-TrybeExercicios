// Crie um algoritmo que conte quantos números do intervalo entre 2 e 150 são divisíveis por 3.
// Caso a quantidade seja igual a 50, exiba uma mensagem secreta.

let contador = 0;

for (let i = 2; i <= 150; i += 1) {
  if (i % 3 === 0) {
    contador += 1;
  }
}
if (contador === 50) {
  console.log("Mensagem secreta", contador);
} else {
  console.log(contador);
}

// 3 -
//Crie um algoritmo que simula o jogo "pedra, papel e tesoura" levando em consideração que são apenas duas pessoas jogando e imprima o resultado no formato:
// "Player 1 won" ou "A Ties" ou "Player 2 won". 


//  pedra pedra 
//  pedra tesoura
//  pedra papel

let player1 = "tesoura"
let player2 = "tesoura"

if (player1 == player2) {
  console.log("A ties")
} else if (player1 == "pedra" && player2 == "tesoura") {
  console.log("Player 1 Win")
} else if (player1 == "papel" && player2 == "pedra") {
  console.log("Player 1 Win")
} else if (player1 == "tesoura" && player2 == "papel") {
  console.log("Player 1 Win")
} else {
  console.log("PLayer 2 Win")
}

//4
//Desenvolva um algoritmo que verifica se a pessoa é maior ou menor de idade.
//Imprima no console seguindo o exemplo: "A pessoa é maior de idade".
//Bônus: Crie a condição utilizando operador ternário.

let pessoa = 10;

(pessoa >= 18 ? console.log("A pessoa é maior de idade") : console.log("A pessoa é menor de idade"))

// 5 

//Crie um algoritmo que recebe a idade de Carolzita , Murilo e Baêta e imprime quem é a pessoa mais nova no formato:
// "Pessoa" é a mais nova.

let Carolzita = 27;
let Murilo = 27;
let Baeta = 27;
if (Carolzita == Murilo && Carolzita == Baeta) {
  console.log("Algo de errado não esta certo")
} else if (Carolzita < Baeta && Carolzita < Murilo) {
  console.log("Carolzita é a mais nova")
} else if (Murilo < Carolzita && Murilo < Baeta) {
  console.log("Murilo é a mais nova")
} else {
  console.log("Baeta é a mais nova")
}