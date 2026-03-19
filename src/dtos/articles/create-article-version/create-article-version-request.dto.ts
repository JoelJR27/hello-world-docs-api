import { createArticleVersionRequestSchema } from "../../../schemas/articles/create-article-version/create-article-version-request.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateArticleVersionRequestDTO extends AbstractDTO<typeof createArticleVersionRequestSchema> {
    rules() {
        return createArticleVersionRequestSchema;
    }
}