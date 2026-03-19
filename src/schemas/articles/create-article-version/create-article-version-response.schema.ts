import { createArticleVersionRequestSchema } from "./create-article-version-request.schema.js";

export const createArticleVersionResponseSchema = createArticleVersionRequestSchema.pick({ articleId: true, version: true })