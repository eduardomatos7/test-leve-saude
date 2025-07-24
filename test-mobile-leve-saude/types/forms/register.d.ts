import { z } from "zod";
import { registerSchema } from "../../schemas/registerSchema";

export type RegisterFormData = z.infer<typeof registerSchema>;
