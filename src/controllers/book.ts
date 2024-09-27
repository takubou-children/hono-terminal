import { Hono } from "hono";

const bookApi = new Hono();

bookApi
  .get("/", (c) => {
    return c.json({ books: [] });
  })
  .post((c) => {
    return c.json({ message: "POST /endpoint" });
  })
  .delete((c) => {
    return c.json({ message: "DELETE /endpoint" });
  });

export default bookApi;
