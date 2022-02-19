const buttonSubmit = document.querySelector('#submit')
const checkWord = document.querySelector('#input-name').value.length
console.log(checkWord)

function preventDefault(event) {
  event.preventDefault()
}
buttonSubmit.addEventListener('click', preventDefault)

function validaCaracteres() {
  if (checkword < 10 || checkWord > 50) {
    alert('Dados Inválidos')
  } else {
    alert('Dados enviados com sucesso!Obrigado por participar do concurso TrybeTrip')
  }
}