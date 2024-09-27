import { ZodSchema } from "zod";

type getRouteProps = {
  path: string;
  paramsSchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

export const getRoute = (props: getRouteProps) => {
  return {
    method: "get",
    path: props.path,
    request: {
      params: props.paramsSchema,
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
