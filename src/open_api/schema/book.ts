import { z } from "@hono/zod-openapi";

export const BookParams = z.object({
  id: z
    .string()
    .min(3)
    .openapi({
      param: {
        name: "id",
        in: "path",
      },
      example: "1212121",
    }),
});

export const BookSchema = z
  .object({
    id: z.string().openapi({
      example: "123",
    }),
    title: z.string().openapi({
      example: "The Great Gatsby",
    }),
    author: z.string().openapi({
      example: "F. Scott Fitzgerald",
    }),
  })

  .openapi("Book");

export const BookRequestBody = BookSchema.omit({ id: true }).openapi({
  required: ["title", "author"],
});

export const BookListSchema = z.array(BookSchema).openapi("BookList");
