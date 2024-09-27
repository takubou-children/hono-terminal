import { Hono } from "hono";
import { CreateBookRoute, GetBooksRoute } from "./open_api/route/book";
import { swaggerUI } from "@hono/swagger-ui";
import api from "./open_api/route";

const app = new Hono();

app.route("/api", api);
export default app;
