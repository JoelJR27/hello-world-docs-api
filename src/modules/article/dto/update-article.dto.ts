import type z from "zod";
import { createArticleSchema } from "./create-article.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/client.js";

export const updateArticleSchema = createArticleSchema.partial().refine((data) => Object.keys(data).length > 0, { error: "Pelo menos um campo deve ser fornecido para atualização" });

export type UpdateArticleDTOType = z.infer<typeof updateArticleSchema>;

export class UpdateArticleDTO extends AbstractDTO<typeof updateArticleSchema, Prisma.ArticleUncheckedUpdateInput> {
    rules() {
        return updateArticleSchema;
    }

    toPrisma(): Prisma.ArticleUncheckedUpdateInput {
        return {
            ...(this.data.title !== undefined && {
                title: this.data.title,
            }),

            ...(this.data.slug !== undefined && {
                slug: this.data.slug,
            }),

            ...(this.data.content !== undefined && {
                content: this.data.content as Prisma.InputJsonValue,
            }),

            ...(this.data.description !== undefined && {
                description: this.data.description,
            }),

            ...(this.data.categoryId !== undefined && {
                categoryId: this.data.categoryId,
            }),

            ...(this.data.subcategoryId !== undefined && {
                subcategoryId: this.data.subcategoryId,
            }),
        }
    }

}