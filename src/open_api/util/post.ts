import { ZodSchema } from "zod";

type postRouteProps = {
  path: string;
  paramsSchema: ZodSchema<any>;
  requestBodySchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

export const postRoute = (props: postRouteProps) => {
  return {
    method: "get",
    path: props.path,
    request: {
      params: props.paramsSchema,
      body: props.requestBodySchema,
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
