import { createRoute } from "@hono/zod-openapi";
import { getRoute } from "../util/get";
import { BookSchema } from "../schema/book";

const routeData = getRoute({
  path: "books",
  responsesSchema: BookSchema,
});
export const BookRoute = createRoute(routeData);
