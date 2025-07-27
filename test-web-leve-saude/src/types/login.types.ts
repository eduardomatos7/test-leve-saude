import type z from "zod";
import type { loginSchema } from "../schemas/login.schema";

export type loginSchemaType = z.infer<typeof loginSchema>;
