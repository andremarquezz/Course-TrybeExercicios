const verifyNumber = (number) => {
  switch (number) {
    case number > 0:
      return 'Positivo';
    case number < 0:
      return 'Negativo';
    case number = 0:
      return 'Neutro';
    default:
      return number
  }
}

module.exports = {
  verifyNumber
}