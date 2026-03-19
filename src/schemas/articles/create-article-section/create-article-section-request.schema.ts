import z from "zod";
import { ArticleSectionContentTypes } from "../sections-contents/index.js";

export const createArticleSectionRequestSchema = z.object({
    articleVersionId: z.cuid({ error: "ID da versão do artigo é inválido." }),
    title: z.string({ error: "Formato do título é inválido." }).trim().min(2, { error: "Título deve ter pelo menos 2 caracteres." }).max(200, { error: "Título deve ter no máximo 200 caracteres." }).optional(),
    content: ArticleSectionContentTypes,
    order: z.int({ error: "Formato da ordem é inválido." }).min(0, { error: "Ordem deve ser um número inteiro não negativo." }).default(0),
})