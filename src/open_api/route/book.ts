import { getRoute } from "../util/get";
import {
  BookListSchema,
  BookParams,
  BookRequestBody,
  BookSchema,
} from "../schema/book";
import { postRoute } from "../util/post";
import { OpenAPIHono } from "@hono/zod-openapi";
import { putRoute } from "../util/put";
import { deleteRoute } from "../util/delete";

export const GetBooksRoute = getRoute({
  path: "books",
  responsesSchema: BookListSchema,
});

export const GetBookRoute = getRoute({
  path: "books/{id}",
  paramsSchema: BookParams,
  responsesSchema: BookSchema,
});

export const CreateBookRoute = postRoute({
  path: "books",
  requestBodySchema: BookRequestBody,
  responsesSchema: BookSchema,
});

export const UpdateBookRoute = putRoute({
  path: "books/{id}",
  paramsSchema: BookParams,
  requestBodySchema: BookRequestBody,
  responsesSchema: BookSchema,
});

export const DeleteBookRoute = deleteRoute({
  path: "books/{id}",
  paramsSchema: BookParams,
  responsesSchema: BookSchema,
});
export const BookApi = new OpenAPIHono();

const api = [
  GetBooksRoute,
  GetBookRoute,
  CreateBookRoute,
  UpdateBookRoute,
  DeleteBookRoute,
];

api.forEach((route) => {
  BookApi.openapi(route, (c) => {
    return c.json({});
  });
});
