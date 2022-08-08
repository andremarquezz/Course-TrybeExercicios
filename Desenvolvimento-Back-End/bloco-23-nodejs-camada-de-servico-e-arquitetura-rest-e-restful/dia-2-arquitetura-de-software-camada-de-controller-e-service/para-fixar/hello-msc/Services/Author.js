const Author = require('../models/Author');
const Contact = require('../models/Contact');

const getNewAuthor = (authorData) => {
  const { id, firstName, middleName, lastName } = authorData;

  const fullName = [firstName, middleName, lastName].filter((name) => name).join(' ');

  return {
    id,
    firstName,
    middleName,
    lastName,
    name: fullName,
  };
};

// const isValid = (firstName, middleName, lastName) => {
//   if (!firstName || typeof firstName !== 'string') return false;
//   if (!lastName || typeof lastName !== 'string') return false;
//   if (middleName && typeof middleName !== 'string') return false;

//   return true;
// };

const getAll = async () => {
  const authors = await Author.getAll();

  return authors.map(getNewAuthor);
};

const findById = async (id) => {
  const author = await Author.findById(id);

  if (!author) return null;

  return getNewAuthor(author);
};

const createAuthor = async (firstName, middleName, lastName, contacts) => {
  const existingAuthor = await Author.findByName(firstName, middleName, lastName);

  if (existingAuthor) {
    return {
      error: {
        code: 'alreadyExists',
        message: 'Uma pessoa autora já existe com esse nome completo',
      },
    };
  }
  const { id } = await Author.createAuthor(firstName, middleName, lastName);

  await Promise.all(contacts.map((contact) => Contact.createContact(id, contact)));

  return { id, firstName, middleName, lastName, contacts };
};

module.exports = {
  getAll,
  findById,
  createAuthor,
};
