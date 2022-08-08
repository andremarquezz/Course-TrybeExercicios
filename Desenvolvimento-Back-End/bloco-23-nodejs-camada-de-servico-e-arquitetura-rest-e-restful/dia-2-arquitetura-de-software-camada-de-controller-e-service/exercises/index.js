const express = require('express');
const app = express();
require('dotenv').config();
app.use(express.json());

const CepController = require('./controllers/CepController');

app.get('/ping', (_req, res) => {
  res.status(200).json({ message: 'pong!' });
});

app.get('/cep/:cep', CepController.findCEP);

app.listen(process.env.PORTA_APP, () =>
  console.log(`Running port ${process.env.PORTA_APP}`)
);
