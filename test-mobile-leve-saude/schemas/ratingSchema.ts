import { z } from "zod";

export const ratingSchema = z.object({
  stars: z.number().min(1, "Escolha uma classificação de 1 a 5.").max(5),
  comment: z
    .string()
    .min(10, "Insira um comentário com pelo menos 10 caracteres"),
});
