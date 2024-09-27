import { Hono } from "hono";
import BookApi from "../controllers/book";

const api = new Hono();
api.route("/books", BookApi);

export default api;
