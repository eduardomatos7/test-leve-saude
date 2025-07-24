import { z } from "zod";
import { loginSchema } from "../../schemas/loginSchema";

export type LoginFormatData = z.infer<typeof loginSchema>;
