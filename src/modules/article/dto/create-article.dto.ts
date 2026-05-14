import z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const createArticleSchema = z.object({
    title: z.string({ error: "Formato do título é inválido." }).trim().min(5, "Título deve conter pelo menos 5 caracteres").max(100, "Título deve conter no máximo 100 caracteres"),
    slug: z.string({ error: "Formato do slug é inválido." }).trim().min(5, "Slug deve conter pelo menos 5 caracteres").max(100, "Slug deve conter no máximo 100 caracteres").regex(/^[a-z0-9]+(?:-[a-z0-9]+)*$/, "Slug deve conter apenas letras minúsculas, números e hífens"),
    content: z.json({ error: "Conteúdo do artigo deve ser um JSON válido." }),
    description: z.string({ error: "Formato da descrição é inválido." }).trim().max(255, "Descrição deve conter no máximo 255 caracteres").optional(),
    categoryId: z.uuidv4({ error: "ID de categoria inválido." }).trim(),
    subcategoryId: z.uuidv4({ error: "ID de subcategoria inválido." }).trim(),
})

export type CreateArticleDTOType = z.infer<typeof createArticleSchema>;

export class CreateArticleDTO extends AbstractDTO<typeof createArticleSchema> {
    rules() {
        return createArticleSchema;
    }
}