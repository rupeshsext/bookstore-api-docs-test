# bookstore-api-docs-test

Made-up bookstore API and docs for testing Mintlify and Dosu free plans. Public, fake data only.

## What's here

| Path | What it is |
|---|---|
| `openapi.yaml` | API spec for 3 endpoints: `GET /books`, `POST /books`, `GET /books/{id}` |
| `src/server.js` | Small fake Express server for the same API |
| `docs/quickstart.md` | Quickstart page |
| `docs/authentication.md` | Authentication page |
| `docs/endpoints.md` | Endpoints page |
| `TEST_PLAN.md` | Test question, field change, and expected answers |

## Run the fake server (optional)

```bash
npm install
npm start
curl http://localhost:3000/v1/books/bk_001 -H "X-API-Key: test"
```
