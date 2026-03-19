import { createArticleRequestSchema } from "../../../schemas/articles/create-article/create-article-request.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateArticleRequestDTO extends AbstractDTO<typeof createArticleRequestSchema> {
    rules() {
        return createArticleRequestSchema;
    }
}