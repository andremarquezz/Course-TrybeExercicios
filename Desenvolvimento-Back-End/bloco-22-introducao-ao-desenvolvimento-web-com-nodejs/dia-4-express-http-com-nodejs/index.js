const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2
app.get('/testejey', handleRequestJey); // 


app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(_req, res) {
  res.status(200).send('Hello World!'); // 4
}

function handleRequestJey(_req, res) {
  res.status(200).send('Vou de imsonia!'); // 4
}
