import type z from "zod";
import { createCategorySchema } from "./create-category.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const updateCategorySchema = createCategorySchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser informado para atualização"
})

export type UpdateCategoryDTOType = z.infer<typeof updateCategorySchema>

export class UpdateCategoryDTO extends AbstractDTO<typeof updateCategorySchema> {
    rules() {
        return updateCategorySchema
    }
}