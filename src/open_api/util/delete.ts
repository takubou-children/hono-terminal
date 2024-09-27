import { ZodSchema } from "zod";

type deleteRouteProps = {
  path: string;
  paramsSchema: ZodSchema<any>;
  responsesSchema: ZodSchema<any>;
};

export const deleteRoute = (props: deleteRouteProps) => {
  return {
    method: "delete",
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
