import { describe, it, expect } from "vitest"
import { CreateArticleSectionRequestDTO } from "../../../../dtos/articles/create-article-section/create-article-section-request.dto.js"

describe("CreateArticleSectionRequestDTO", () => {
    const validPayload = {
        articleVersionId: "ckv1234567890abcdefg",
        title: "Section Title",
        content: {
            type: "PARAGRAPH",
            content: {
                text: "This is a text section."
            }
        },
        order: 1
    }


    it("should validate a correct payload", () => {
        const payload = { ...validPayload }
        expect(() => new CreateArticleSectionRequestDTO(payload)).not.toThrow()
    })

    it("should throw an error for missing required fields", () => {
        const payload = { ...validPayload }
        payload.articleVersionId = ""

        expect(() => new CreateArticleSectionRequestDTO(payload)).toThrow()
    })

    it("should throw an error for invalid articleVersionId", () => {
        const payload = { ...validPayload }
        payload.articleVersionId = "invalid-id"
        expect(() => new CreateArticleSectionRequestDTO(payload)).toThrow()
    })

    it("should throw an error for invalid content type", () => {
        const payload = { ...validPayload }
        payload.content.type = "INVALID_TYPE"

        expect(() => new CreateArticleSectionRequestDTO(payload)).toThrow()
    })

    it("should throw an error for non-integer order", () => {
        const payload = { ...validPayload }
        payload.order = 1.5

        expect(() => new CreateArticleSectionRequestDTO(payload)).toThrow()
    })

    it("should throw an error for negative order", () => {
        const payload = { ...validPayload }
        payload.order = -1

        expect(() => new CreateArticleSectionRequestDTO(payload)).toThrow()
    })


})