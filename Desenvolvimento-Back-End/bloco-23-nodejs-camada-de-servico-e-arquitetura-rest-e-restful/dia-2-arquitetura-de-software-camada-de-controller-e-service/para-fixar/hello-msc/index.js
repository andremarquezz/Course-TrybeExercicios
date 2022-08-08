const express = require('express');
const bodyParser = require('body-parser');
const rescue = require('../rescue');
const errorMiddleware = require('./middlewares/error');

const Author = require('./Controllers/Author');

const app = express();

app.use(bodyParser.json());
app.use(errorMiddleware);

app.get('/authors', rescue(Author.getAll));

app.get('/authors/:id', rescue(Author.findById));

app.post('/authors', rescue(Author.createAuthor));

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
