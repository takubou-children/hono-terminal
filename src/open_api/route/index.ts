import { OpenAPIHono } from "@hono/zod-openapi";
import { CreateBookRoute, GetBookRoute, GetBooksRoute } from "./book";
import { swaggerUI } from "@hono/swagger-ui";

const api = new OpenAPIHono();

api.openapi(GetBooksRoute, (c) => {
  return c.json({});
});

api.openapi(GetBookRoute, (c) => {
  return c.json({});
});

api.openapi(CreateBookRoute, (c) => {
  return c.json({});
});

api.get("/ui", swaggerUI({ url: "/api/doc" }));
api.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default api;
