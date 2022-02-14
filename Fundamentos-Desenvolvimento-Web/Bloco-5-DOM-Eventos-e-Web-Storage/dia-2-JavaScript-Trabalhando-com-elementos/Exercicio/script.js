// 1- Adicione a tag h1 com o texto Exercício 5.2 - JavaScript DOM como filho da tag body ;

let body = document.getElementsByClassName('bodyClass');

let createInBody = document.createElement('div');

body[0].appendChild(createInBody);

createInBody.innerText = 'Exercício 5.2 - JavaScript';


//2- Adicione a tag main com a classe main-content como filho da tag body ;

let createMain = document.createElement('main');

body[0].appendChild(createMain);
createMain.className = 'main-content';

//3- Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;

let main = document.getElementsByClassName('main-content');
let createInMain = document.createElement('section');


main[0].appendChild(createInMain);
createInMain.className = 'center-content';



//4- Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
let section = document.getElementsByClassName('center-content');
let createInSection = document.createElement('p');

section[0].appendChild(createInSection);
createInSection.innerText = 'Devagarinho a gente vai, vrum'

//5- Adicione a tag section com a classe left - content como filho da tag main criada no passo 2;

let createSectionMain = document.createElement('section');

createSectionMain.className = 'left-content'

main[0].appendChild(createSectionMain)
//6- Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;


createSectionMain.className = 'right-content'

main[0].appendChild(createSectionMain)

//7- Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image . Esse elemento deve ser filho do section criado no passo 5;


let createImg = document.createElement('img');

createImg.className = 'small-image'

createImg.setAttribute('src', 'https://picsum.photos/200', )
createImg.setAttribute('alt', 'Imagem Aleatoria')
main[0].appendChild(createImg)

//8- Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um , dois , três , ... como valores da lista. Essa lista deve ser filha do section criado no passo 6;


// Não consegui fazer a 8


let createListSection = document.getElementsByClassName('right-content')

//  Criando a TAG Principal
let createUl = document.createElement('ul')
createListSection[0].appendChild(createUl)
createUl.className = 'listUnordered'
// Array Lista
let lista = ['Um', 'Dois', 'Tres', 'Quatro', 'Cinco', 'Seis', 'Sete', 'Oito', 'Nove', 'Dez']
//  Criando o LI para receber os itens
let ClassList = document.getElementsByClassName(listUnordered)


for (value in lista) {
  let CreateLi = document.createElement('li')
  CreateLi.innerHTML(lista[value])
  ClassList[0].appendChild(CreateLi)
};


// 9-Adicione 3 tags h3 , todas sendo filhas do main criado no passo 2.

// for (let index = 1;)

let createH3Main = document.createElement('h3');


main[0].appendChild(createH3Main)


console.log(document.querySelectorAll('main-content'))