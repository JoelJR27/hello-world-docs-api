import type z from "zod";
import { createSubcategorySchema } from "./create-subcategory.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const updateSubcategorySchema = createSubcategorySchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateSubcategoryDTOType = z.infer<typeof updateSubcategorySchema>;

export class UpdateSubcategoryDTO extends AbstractDTO<typeof updateSubcategorySchema, Prisma.SubcategoryUncheckedUpdateInput> {
    rules() {
        return updateSubcategorySchema
    }

    protected toPrisma(): Prisma.SubcategoryUncheckedUpdateInput {
        return {
            ...(this.data.name !== undefined && {
                name: this.data.name
            }),

            ...(this.data.slug !== undefined && {
                slug: this.data.slug
            }),

            ...(this.data.order !== undefined && {
                order: this.data.order
            }),

            ...(this.data.categoryId !== undefined && {
                categoryId: this.data.categoryId
            }),
        }
    }
}   