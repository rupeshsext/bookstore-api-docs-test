# Test plan: Mintlify and Dosu free plans

This repo is public and contains only made-up data.

## Test question

> What fields does GET /books/{id} return?

Use exactly this question in both tools.

## Field change

Rename `author` to `author_name` in:

- `openapi.yaml` (Book and NewBook schemas)
- `src/server.js` (book data and POST /books)
- `docs/endpoints.md` and `docs/quickstart.md`

## Expected answer BEFORE the change

GET /books/{id} returns a Book object with these fields:

`id`, `title`, `author`, `isbn`, `price`, `published_year`, `in_stock`

## Expected answer AFTER the change

GET /books/{id} returns a Book object with these fields:

`id`, `title`, `author_name`, `isbn`, `price`, `published_year`, `in_stock`

The answer must not mention `author` any more.

## Baseline answers (fill in before the change)

| Tool | Date | Answer given | Matches expected? | Source cited |
|---|---|---|---|---|
| Mintlify |  |  |  |  |
| Dosu |  |  |  |  |
