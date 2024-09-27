import { Hono } from "hono";
import BookApi from "../controllers/book";

const api = new Hono();
api.route("/", BookApi);

export default api;
