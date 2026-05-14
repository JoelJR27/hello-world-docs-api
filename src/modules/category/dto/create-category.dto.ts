import z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const createCategorySchema = z.object({
    name: z.string({ error: "O nome deve ser do formato texto" }).min(2, { error: "O nome deve ter no mínimo 2 caracteres" }).max(100, { error: "O nome deve ter no máximo 100 caracteres" }),
    slug: z.string({ error: "O slug deve ser do formato texto" }).min(2, { error: "O slug deve ter no mínimo 2 caracteres" }).max(100, { error: "O slug deve ter no máximo 100 caracteres" }),
    order: z.number({ error: "O order deve ser do formato número" }).min(0, { error: "O order deve ser um número maior ou igual a 0" }).optional()
})

export type CreateCategoryDTOType = z.infer<typeof createCategorySchema>

export class CreateCategoryDTO extends AbstractDTO<typeof createCategorySchema> {
    rules() {
        return createCategorySchema
    }
}
