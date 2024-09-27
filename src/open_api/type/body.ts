import { ZodType } from "zod";

//zod スキーマのみ対応
interface ZodMediaTypeObject {
  schema: ZodType<unknown>;
}
export type ZodMediaType =
  | "application/json"
  | "text/html"
  | "text/plain"
  | "application/xml"
  | (string & {});
export type ZodContentObject = Partial<
  Record<ZodMediaType, ZodMediaTypeObject>
>;
export type ZodRequestBody = {
  description?: string;
  content: ZodContentObject;
  required?: boolean;
};
