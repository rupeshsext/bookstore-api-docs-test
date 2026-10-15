# Endpoints

Base URL: `https://api.example-bookstore.test/v1`

All endpoints need the `X-API-Key` header. See [Authentication](authentication.md).

## The Book object

| Field | Type | Description |
|---|---|---|
| `id` | string | Unique book ID, for example `bk_001`. |
| `title` | string | Book title. |
| `author_name` | string | Name of the book's author. |
| `isbn` | string | ISBN of the book. Can be null. |
| `price` | number | Price in US dollars. |
| `published_year` | integer | Year the book was published. Can be null. |
| `in_stock` | boolean | Whether the book is in stock. |

## GET /books

Returns a list of books.

| Query parameter | Type | Description |
|---|---|---|
| `limit` | integer | Maximum number of books to return. Default 20, maximum 100. |

**Response `200`:** an array of Book objects.

## POST /books

Adds a new book.

Request body:

| Field | Type | Required |
|---|---|---|
| `title` | string | Yes |
| `author_name` | string | Yes |
| `price` | number | Yes |
| `isbn` | string | No |
| `published_year` | integer | No |

**Response `201`:** the new Book object.
**Response `400`:** a required field is missing.

## GET /books/{id}

Returns one book by its ID.

| Path parameter | Type | Description |
|---|---|---|
| `id` | string | The book ID, for example `bk_001`. |

**Response `200`:** a Book object with these fields: `id`, `title`, `author_name`, `isbn`, `price`, `published_year`, `in_stock`.

```json
{
  "id": "bk_001",
  "title": "The Silent Orchard",
  "author_name": "Mira Okafor",
  "isbn": "000-0-00-000001-1",
  "price": 14.99,
  "published_year": 2019,
  "in_stock": true
}
```

**Response `404`:** no book has this ID.

```json
{
  "code": "not_found",
  "message": "No book has the ID bk_999."
}
```
