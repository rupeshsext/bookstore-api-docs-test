# Quickstart

Make your first request to the Bookstore API in a few minutes.

> This is a made-up API for testing documentation tools. The server URL does not exist and all data is fake.

## 1. Get an API key

Every request needs an API key. See [Authentication](authentication.md) for how to send it.

## 2. List books

```bash
curl https://api.example-bookstore.test/v1/books \
  -H "X-API-Key: YOUR_API_KEY"
```

## 3. Get one book

```bash
curl https://api.example-bookstore.test/v1/books/bk_001 \
  -H "X-API-Key: YOUR_API_KEY"
```

Response:

```json
{
  "id": "bk_001",
  "title": "The Silent Orchard",
  "author": "Mira Okafor",
  "isbn": "000-0-00-000001-1",
  "price": 14.99,
  "published_year": 2019,
  "in_stock": true
}
```

## 4. Add a book

```bash
curl -X POST https://api.example-bookstore.test/v1/books \
  -H "X-API-Key: YOUR_API_KEY" \
  -H "Content-Type: application/json" \
  -d '{"title": "New Book", "author": "Jane Doe", "price": 9.99}'
```

## Next steps

- [Authentication](authentication.md)
- [Endpoints](endpoints.md)
