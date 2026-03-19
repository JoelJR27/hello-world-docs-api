import z from "zod";

export const createArticleResponseSchema = z.object({
    id: z.cuid({ error: "ID do artigo inválido!" }),
    title: z.string({ error: "Título do artigo é obrigatório!" }),
})