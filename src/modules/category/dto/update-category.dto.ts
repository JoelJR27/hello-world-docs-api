import type z from "zod";
import { createCategorySchema } from "./create-category.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const updateCategorySchema = createCategorySchema.partial().refine((data) => Object.keys(data).length > 0, {
    message: "Pelo menos um campo deve ser informado para atualização"
})

export type UpdateCategoryDTOType = z.infer<typeof updateCategorySchema>

export class UpdateCategoryDTO extends AbstractDTO<typeof updateCategorySchema, Prisma.CategoryUncheckedUpdateInput> {
    rules() {
        return updateCategorySchema
    }

    toPrisma(): Prisma.CategoryUncheckedUpdateInput {
        return {
            ...(this.data.name !== undefined && {
                categoryId: this.data.name,
            }),

            ...(this.data.slug !== undefined && {
                slug: this.data.slug,
            }),

            ...(this.data.order !== undefined && {
                order: this.data.order,
            }),
        }
    }
}