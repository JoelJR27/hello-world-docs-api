import z from "zod";
import { zStringSanitized } from "../../../utils/z-string-sanitized.js";

export const createArticleRequestSchema = z.object({
    title: zStringSanitized("É necessário fornecer um título para o artigo.").pipe(z.string({ error: "Formato inválido para o título do artigo!" }).min(1, { error: "O título do artigo não pode ser vazio." })),
    slug: zStringSanitized("É necessário fornecer um slug para o artigo.").pipe(z.string({ error: "Formato inválido para o slug do artigo!" }).min(1, { error: "O slug do artigo não pode ser vazio." })),
    description: zStringSanitized("Formato inválido para a descrição do artigo!").pipe(z.string().min(1, { error: "A descrição do artigo não pode ser vazia." })).optional(),
    categoryId: z.string({ error: "Formato inválido para o ID da categoria!" }).trim().pipe(z.cuid({ error: "ID inválido fornecido!" })).optional(),
    subcategoryId: z.string({ error: "Formato inválido para o ID da subcategoria!" }).trim().pipe(z.cuid({ error: "ID inválido fornecido!" })).optional(),
})
