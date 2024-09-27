import { createRoute } from "@hono/zod-openapi";
import { getRoute } from "../util/get";
import { BookParams, BookSchema } from "../schema/book";
import { postRoute } from "../util/post";

export const GetBooksRoute = getRoute({
  path: "books/{id}",
  paramsSchema: BookParams,
  responsesSchema: BookSchema,
});

export const CreateBookRoute = postRoute({
  path: "books",
  requestBodySchema: BookSchema,
  responsesSchema: BookSchema,
});
