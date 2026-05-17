import z from "zod";
import { createCategorySchema } from "../../category/dto/create-category.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const createSubcategorySchema = z.object({
    name: createCategorySchema.pick({ name: true }).shape.name,
    slug: createCategorySchema.pick({ slug: true }).shape.slug,
    order: createCategorySchema.pick({ order: true }).shape.order,
    categoryId: z.uuid({ error: "O ID da categoria deve ser um UUID válido" }).describe("ID da categoria à qual a subcategoria pertence."),
})

export type CreateSubcategoryDTOType = z.infer<typeof createSubcategorySchema>;

export class CreateSubcategoryDTO extends AbstractDTO<typeof createSubcategorySchema, Prisma.SubcategoryUncheckedCreateInput> {

    rules() {
        return createSubcategorySchema
    }

    toPrisma(): Prisma.SubcategoryUncheckedCreateInput {
        return {
            name: this.data.name,
            slug: this.data.slug,
            order: this.data.order,
            categoryId: this.data.categoryId
        }
    }
}