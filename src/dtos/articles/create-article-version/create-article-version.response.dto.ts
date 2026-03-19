import { createArticleVersionResponseSchema } from "../../../schemas/articles/create-article-version/create-article-version-response.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateArticleVersionResponseDTO extends AbstractDTO<typeof createArticleVersionResponseSchema> {
    rules() {
        return createArticleVersionResponseSchema
    }
}