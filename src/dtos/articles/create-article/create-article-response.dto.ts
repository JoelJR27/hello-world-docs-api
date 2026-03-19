import { createArticleResponseSchema } from "../../../schemas/articles/create-article/create-article-response.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateArticleResponseDTO extends AbstractDTO<typeof createArticleResponseSchema> {
    rules() {
        return createArticleResponseSchema;
    }
}