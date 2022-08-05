const express = require('express');
const Books = require('./Models/books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/books', async (req, res) => {
  const books = await Books.getAll();
  res.status(200).json(books);
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
