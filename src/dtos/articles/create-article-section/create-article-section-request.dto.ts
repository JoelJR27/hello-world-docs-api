import { createArticleSectionRequestSchema } from "../../../schemas/articles/create-article-section/create-article-section-request.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateArticleSectionRequestDTO extends AbstractDTO<typeof createArticleSectionRequestSchema> {
    rules() {
        return createArticleSectionRequestSchema
    }
}