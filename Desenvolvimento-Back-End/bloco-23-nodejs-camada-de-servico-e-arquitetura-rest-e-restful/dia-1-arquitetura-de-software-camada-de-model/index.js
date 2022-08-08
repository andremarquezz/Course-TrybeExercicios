const express = require('express');
const Books = require('./Models/books');

const app = express();

const PORT = process.env.PORT || 3000;

app.get('/books', async (req, res) => {
  try {
    const books = await Books.getAll();
    return res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
