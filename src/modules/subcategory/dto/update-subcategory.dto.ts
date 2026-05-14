import type z from "zod";
import { createSubcategorySchema } from "./create-subcategory.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const updateSubcategorySchema = createSubcategorySchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateSubcategoryDTOType = z.infer<typeof updateSubcategorySchema>;

export class UpdateSubcategoryDTO extends AbstractDTO<typeof updateSubcategorySchema> {
    rules() {
        return updateSubcategorySchema
    }
}   