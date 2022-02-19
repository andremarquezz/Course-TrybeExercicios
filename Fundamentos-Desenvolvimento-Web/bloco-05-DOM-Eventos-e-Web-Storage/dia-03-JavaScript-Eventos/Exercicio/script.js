function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
}

createDaysOfTheWeek();

// Exercicio 1
function createDays() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  let getDayId = document.querySelector('#days');

  for (let dias of dezDaysList) {
    let criaLi = document.createElement('li');
    if (dias === 24 || dias === 31) {
      criaLi.className = 'day holiday';
      criaLi.innerHTML = dias;
      getDayId.appendChild(criaLi);

    } else if (dias === 4 || dias === 11 || dias === 18) {
      criaLi.className = 'day friday';
      criaLi.innerHTML = dias;
      getDayId.appendChild(criaLi);
    } else if (dias === 25) {
      criaLi.className = 'day holiday friday';
      criaLi.innerHTML = dias;
      getDayId.appendChild(criaLi);
    } else {
      criaLi.className = 'day';
      criaLi.innerHTML = dias;
      getDayId.appendChild(criaLi);
    }

  }
}
createDays();

// Exercicio 2
function createButton(nomeBotao) {
  let getBotaoClass = document.querySelector('.buttons-container');
  let newBotao = document.createElement('button');
  newBotao.innerHTML = nomeBotao;
  newBotao.id = 'btn-holiday';
  getBotaoClass.appendChild(newBotao);
}

createButton('Feriados')

//  Exercicio 3

function changeBackground() {
  let getClass = document.querySelectorAll('.holiday');
  for (let day = 0; day < getClass.length; day += 1) {
    if (getClass[day].style.backgroundColor === 'white') {
      getClass[day].style.backgroundColor = 'rgb(238, 238, 238)'

    } else {
      getClass[day].style.backgroundColor = 'white'
    }

  }
}
let botton = document.querySelector('#btn-holiday');
botton.addEventListener('click', changeBackground)

//  Exercicio 4
function createButtonSexta(nomeBotao) {
  let getBotaoClass = document.querySelector('.buttons-container');
  let newBotao = document.createElement('button');
  newBotao.innerHTML = nomeBotao;
  newBotao.id = 'btn-friday';
  getBotaoClass.appendChild(newBotao);
}
createButtonSexta('Sexta Feira')

//  Exercicio 5

function changeSextou() {
  let getDay = document.querySelectorAll('.friday')
  for (let i = 0; i < getDay.length; i += 1) {
    if (getDay[i] === Number) {
      getDay[i].innerText('Sextou!!')
    } else {

    }
  }
}
let bottonSexta = document.querySelector('#btn-friday');
botton.addEventListener('click', changeSextou)