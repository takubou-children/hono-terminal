import { Hono } from "hono";

const bookApi = new Hono();

bookApi
  .get("/books", (c) => {
    return c.json({ books: [] });
  })
  .post((c) => {
    return c.json({ message: "POST /endpoint" });
  })
  .delete((c) => {
    return c.json({ message: "DELETE /endpoint" });
  });

export default bookApi;
