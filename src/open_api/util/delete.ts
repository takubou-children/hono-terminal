import { AnyZodObject, ZodSchema } from "zod";
import { RouteConfig } from "@hono/zod-openapi";
import { ZodObjectWithEffect } from "../type/params";

type deleteRouteProps = {
  path: string;
  paramsSchema?: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

export const deleteRoute = (
  props: deleteRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "delete",
    path: props.path,

    request: {
      params: props.paramsSchema as AnyZodObject | ZodObjectWithEffect,
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
