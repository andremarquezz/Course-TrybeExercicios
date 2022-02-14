let names = {
  person1: 'João',
  person2: 'Maria',
  person3: 'Jorge',
};

for (let nameOne in names) {
  console.log("Olá " + names[nameOne])
}

let car = {
  model: 'A3 Sedan',
  manufacturer: 'Audi',
  year: 2020
};

for (let value in car) {
  console.log(value + ' ' + car[value])

}