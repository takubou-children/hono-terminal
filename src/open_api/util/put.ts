import { AnyZodObject, ZodSchema } from "zod";
import { ZodObjectWithEffect } from "../type/params";
import { RouteConfig } from "@hono/zod-openapi";
import { ZodRequestBody } from "../type/body";

type putRouteProps = {
  path: string;
  paramsSchema?: ZodSchema<any>;
  requestBodySchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

export const putRoute = (
  props: putRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "get",
    path: props.path,
    request: {
      params: props.paramsSchema as AnyZodObject | ZodObjectWithEffect,
      body: props.requestBodySchema as unknown as ZodRequestBody,
    },
    responses: {
      200: {
        content: {
          "application/json": {
            schema: props.responsesSchema,
          },
        },
        description: "Successful response",
      },

      404: {
        description: "Resource not found",
      },
      500: {
        description: "Internal server error",
      },
    },
  };
};
