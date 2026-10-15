// Made-up Bookstore API for testing documentation tools. All data is fake.
const express = require('express');

const app = express();
app.use(express.json());

const books = [
  {
    id: 'bk_001',
    title: 'The Silent Orchard',
    author: 'Mira Okafor',
    isbn: '000-0-00-000001-1',
    price: 14.99,
    published_year: 2019,
    in_stock: true,
  },
  {
    id: 'bk_002',
    title: 'Rivers of Glass',
    author: 'Tomas Lindqvist',
    isbn: '000-0-00-000002-8',
    price: 22.5,
    published_year: 2021,
    in_stock: false,
  },
];

// Every request needs an X-API-Key header. Any non-empty value works in this fake API.
function requireApiKey(req, res, next) {
  if (!req.get('X-API-Key')) {
    return res.status(401).json({ code: 'unauthorized', message: 'Missing X-API-Key header.' });
  }
  next();
}

app.use('/v1', requireApiKey);

// GET /books - list books
app.get('/v1/books', (req, res) => {
  const limit = Math.min(parseInt(req.query.limit, 10) || 20, 100);
  res.json(books.slice(0, limit));
});

// POST /books - add a book
app.post('/v1/books', (req, res) => {
  const { title, author, isbn, price, published_year } = req.body || {};
  if (!title || !author || typeof price !== 'number') {
    return res.status(400).json({ code: 'invalid_request', message: 'title, author and price are required.' });
  }
  const book = {
    id: `bk_${String(books.length + 1).padStart(3, '0')}`,
    title,
    author,
    isbn: isbn || null,
    price,
    published_year: published_year || null,
    in_stock: true,
  };
  books.push(book);
  res.status(201).json(book);
});

// GET /books/{id} - get one book
app.get('/v1/books/:id', (req, res) => {
  const book = books.find((b) => b.id === req.params.id);
  if (!book) {
    return res.status(404).json({ code: 'not_found', message: `No book has the ID ${req.params.id}.` });
  }
  res.json(book);
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Bookstore API listening on port ${port}`));
