import z from "zod";
import { calloutSectionSchema } from "./callout-section.schema.js";
import { codeSectionSchema } from "./code-section.schema.js";
import { headingSectionSchema } from "./heading-section.schema.js";
import { linkPreviewSectionSchema } from "./link-preview-section.schema.js";
import { listSectionSchema } from "./list-section.schema.js";
import { quoteSectionSchema } from "./quote-section.schema.js";
import { tableSectionSchema } from "./table-section.schema.js";
import { paragraphSectionSchema } from "./paragraph-section.schema.js";
import { videoSectionSchema } from "./video-section.schema.js";

export const ArticleSectionContentTypes = z.discriminatedUnion("type", [calloutSectionSchema, codeSectionSchema, headingSectionSchema, linkPreviewSectionSchema, listSectionSchema, paragraphSectionSchema, quoteSectionSchema, tableSectionSchema, videoSectionSchema], { message: "Tipo de seção inválido!" })

export const ArticleSectionsSchemaArray = z.array(ArticleSectionContentTypes, { message: "Tipo de seção inválido!" })

export type ArticleSectionContent = z.infer<typeof ArticleSectionContentTypes>
export type ArticleSectionsArray = z.infer<typeof ArticleSectionsSchemaArray>