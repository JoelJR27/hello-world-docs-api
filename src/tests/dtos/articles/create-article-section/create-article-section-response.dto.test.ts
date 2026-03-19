import { describe, it, expect } from "vitest"
import { CreateArticleSectionResponseDTO } from "../../../../dtos/articles/create-article-section/create-article-section-response.dto.js"

describe("CreateArticleSectionResponseDTO", () => {
    it("should validate a correct payload", () => {
        const payload = {
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

        const expected = {
            title: "Section Title",
            content: {
                type: "PARAGRAPH",
                content: {
                    text: "This is a text section."
                }
            },
            order: 1
        }

        expect(new CreateArticleSectionResponseDTO(payload).getAll()).toEqual(expected)
    })

    it("should throw an error if payload is missing required fields", () => {
        const payload = {
            articleVersionId: "ckv1234567890abcdefg",
            content: {
                // Campo "type" está faltando aqui, o que é necessário para validar o conteúdo
                content: {
                    text: "This is a text section."
                }
            },
            order: 1
        }

        expect(() => new CreateArticleSectionResponseDTO(payload)).toThrowError()
    })

    it("should throw an error if payload has invalid content type", () => {
        const payload = {
            articleVersionId: "ckv1234567890abcdefg",
            title: "Section Title",
            content: {
                type: "INVALID_TYPE", 
                content: {
                    text: "This is a text section."
                }
            },
            order: 1
        }
        expect(() => new CreateArticleSectionResponseDTO(payload)).toThrowError()
    })

    it("should throw an error if order is not a number", () => {
        const payload = {
            articleVersionId: "ckv1234567890abcdefg",
            title: "Section Title",
            content: {
                type: "PARAGRAPH",
                content: {
                    text: "This is a text section."
                }
            },
            order: "first"
        }
        expect(() => new CreateArticleSectionResponseDTO(payload)).toThrowError()
    })

})