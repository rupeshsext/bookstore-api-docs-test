# Authentication

The Bookstore API uses an API key sent in a request header.

> This is a made-up API for testing documentation tools. There are no real keys. Any non-empty value works.

## Send your key

Add the `X-API-Key` header to every request:

```bash
curl https://api.example-bookstore.test/v1/books \
  -H "X-API-Key: YOUR_API_KEY"
```

## Errors

If the header is missing or invalid, the API returns `401 Unauthorized`:

```json
{
  "code": "unauthorized",
  "message": "Missing X-API-Key header."
}
```

## Keep keys safe

- Do not put keys in public code or URLs.
- Use a separate key for each app.
