const readline = require('readline-sync');

const calcIMC = (height, weight) => {
  const resultIMC = (height / Math.pow(weight, 2)).toFixed(2);
  return `O IMC do user é ${resultIMC}`;
};

const askHeight = () => {
  const answerHeight = readline.questionFloat('Qual a sua altura? ');
  return answerHeight;
};

const askWeight = () => {
  const answerWeight = readline.question('Qual o seu peso? ');
  return answerWeight;
};

const main = () => {
  const height = askHeight();
  const weight = askWeight();
  return calcIMC(height, weight);
};

console.log(main());

// module.exports = {
//   calcIMC
// }
