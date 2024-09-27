import { Hono } from "hono";
import { CreateBookRoute, GetBooksRoute } from "./open_api/route/book";
import { swaggerUI } from "@hono/swagger-ui";
import api from "./open_api/route";
import { prettyJSON } from "hono/pretty-json";

const app = new Hono();
app.use(prettyJSON());
app.notFound((c) => c.json({ message: "Not Found", ok: false }, 404));

app.get("/", (c) => {
  return c.json({ message: "Hello, World!" });
});

app.route("/api", api);

export default app;
