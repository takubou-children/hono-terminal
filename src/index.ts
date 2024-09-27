import { OpenAPIHono } from "@hono/zod-openapi";
import { CreateBookRoute, GetBooksRoute } from "./open_api/route/book";

const app = new OpenAPIHono();

// The OpenAPI documentation will be available at /doc
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
