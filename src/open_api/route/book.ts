import { getRoute } from "../util/get";
import { BookParams, BookRequestBody, BookSchema } from "../schema/book";
import { postRoute } from "../util/post";

export const GetBooksRoute = getRoute({
  path: "books/{id}",
  paramsSchema: BookParams,
  responsesSchema: BookSchema,
});

export const CreateBookRoute = postRoute({
  path: "books/",
  requestBodySchema: BookRequestBody,
  responsesSchema: BookSchema,
});
