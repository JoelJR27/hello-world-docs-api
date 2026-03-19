import z from "zod";

export const createArticleVersionRequestSchema = z.object({
    articleId: z.cuid({ error: "ID de artigo inválido!" }),
    version: z.number({ error: "A versão do artigo deve ser representada por um número!" }).min(1, { error: "O número da versão deve ser no mínimo 1!" }),
})