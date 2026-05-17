import z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { InputJsonValue } from "@prisma/client/runtime/client";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const createArticleSchema = z.object({
    title: z.string({ error: "Formato do título é inválido." }).trim().min(5, "Título deve conter pelo menos 5 caracteres").max(100, "Título deve conter no máximo 100 caracteres"),
    slug: z.string({ error: "Formato do slug é inválido." }).trim().min(5, "Slug deve conter pelo menos 5 caracteres").max(100, "Slug deve conter no máximo 100 caracteres").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug deve conter apenas letras minúsculas, números e hífens"),
    content: z.json({ error: "Conteúdo do artigo deve ser um JSON válido." }).refine((value) => value !== null, {
        message: "Conteúdo do artigo não pode ser null.",
    }),
    description: z.string({ error: "Formato da descrição é inválido." }).trim().max(255, "Descrição deve conter no máximo 255 caracteres").nullable(),
    categoryId: z.uuidv4({ error: "ID de categoria inválido." }).trim().optional(),
    subcategoryId: z.uuidv4({ error: "ID de subcategoria inválido." }).trim().optional(),
})

export type CreateArticleDTOType = z.infer<typeof createArticleSchema>;

export class CreateArticleDTO extends AbstractDTO<typeof createArticleSchema, Prisma.ArticleUncheckedCreateInput> {
    rules() {
        return createArticleSchema;
    }

    toPrisma() {
        return {
            title: this.data.title,
            slug: this.data.slug,
            content: this.data.content,
            description: this.data.description,
            categoryId: this.data.categoryId,
            subcategoryId: this.data.subcategoryId
        }
    }
}