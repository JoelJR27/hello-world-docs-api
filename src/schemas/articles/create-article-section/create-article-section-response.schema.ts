
import { createArticleSectionRequestSchema } from "./create-article-section-request.schema.js";

export const createArticleSectionResponseSchema = createArticleSectionRequestSchema.pick({
    title: true,
    content: true,
    order: true,
})