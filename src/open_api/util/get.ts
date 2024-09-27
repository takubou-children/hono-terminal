import { AnyZodObject, ZodEffects, ZodSchema } from "zod";
import { RouteConfig } from "@hono/zod-openapi"; // Import the RouteConfig type

type getRouteProps = {
  path: any;
  paramsSchema?: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

type ZodObjectWithEffect =
  | AnyZodObject
  | ZodEffects<ZodObjectWithEffect, unknown, unknown>;

export const getRoute = (
  props: getRouteProps
): Omit<RouteConfig, "path"> & { path: string } => {
  return {
    method: "get",
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
