import type z from "zod";
import { createArticleSchema } from "./create-article.dto.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const updateArticleSchema = createArticleSchema.partial().refine((data) => Object.keys(data).length > 0, { error: "Pelo menos um campo deve ser fornecido para atualização" });

export type UpdateArticleDTOType = z.infer<typeof updateArticleSchema>;

export class UpdateArticleDTO extends AbstractDTO<typeof updateArticleSchema> {
    rules() {
        return updateArticleSchema;
    }
}