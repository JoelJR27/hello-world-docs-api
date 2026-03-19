import { createArticleSectionResponseSchema } from "../../../schemas/articles/create-article-section/create-article-section-response.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";


export class CreateArticleSectionResponseDTO extends AbstractDTO<typeof createArticleSectionResponseSchema> {
    rules() {
        return createArticleSectionResponseSchema;
    }
}