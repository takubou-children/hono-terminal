import { OpenAPIHono } from "@hono/zod-openapi";
import { BookApi, CreateBookRoute, GetBookRoute, GetBooksRoute } from "./book";
import { swaggerUI } from "@hono/swagger-ui";

const api = new OpenAPIHono();

//docのbase path
api.route("/api/v1", BookApi);

//swagger ui
api.get("/ui", swaggerUI({ url: "/api/doc" }));
api.doc("/doc", {
  openapi: "3.0.0",
  info: {
    version: "1.0.0",
    title: "My API",
  },
});

export default api;
