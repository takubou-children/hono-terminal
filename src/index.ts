import { OpenAPIHono } from "@hono/zod-openapi";
import { CreateBookRoute, GetBooksRoute } from "./open_api/route/book";
import { swaggerUI } from "@hono/swagger-ui";
const app = new OpenAPIHono();

app.openapi(GetBooksRoute, (c) => {
  return c.json({});
});

app.openapi(CreateBookRoute, (c) => {
  return c.json({});
});

app.get("/ui", swaggerUI({ url: "/doc" }));
app.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default app;
