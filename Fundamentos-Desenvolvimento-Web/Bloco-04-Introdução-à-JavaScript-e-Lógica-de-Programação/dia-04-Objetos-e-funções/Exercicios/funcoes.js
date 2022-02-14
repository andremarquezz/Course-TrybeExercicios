function checkPalindrome(palindrome) {
  let checkReverse = palindrome.split('').reverse().join('');
  if (palindrome === checkReverse) {
    return console.log('É um palindromo! ' + checkReverse)
  }
  return console.log('Não é um palindromo! ' + checkReverse)
}
checkPalindrome('lixo')

// Exercicio 2

// function arrayLenght(array) {
//   let array = [];