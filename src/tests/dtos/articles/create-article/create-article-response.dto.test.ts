import { describe, it, expect } from "vitest";
import { CreateArticleResponseDTO } from "../../../../dtos/articles/create-article/create-article-response.dto.js";

describe("CreateArticleResponseDTO", () => {
    it("should validate a valid article response", () => {
        const validData = {
            id: "cuid1234567890",
            title: "A Valid Article Title"
        };
        const dto = new CreateArticleResponseDTO(validData);
        expect(dto.getAll()).toEqual(validData);
    })

    it("should throw an error for invalid article response", () => {
        const invalidData = {
            id: "invalid-id",
            title: ""
        };
        expect(() => new CreateArticleResponseDTO(invalidData)).toThrow("ID do artigo inválido!");
    });

    it("should throw an error for missing title", () => {
        const invalidData = {
            id: "cuid1234567890",
        };
        expect(() => new CreateArticleResponseDTO(invalidData)).toThrow("Título do artigo é obrigatório!");
    });

    it("should throw an error for missing id", () => {
        const invalidData = {
            title: "A Valid Article Title"
        };
        expect(() => new CreateArticleResponseDTO(invalidData)).toThrow("ID do artigo inválido!");
    });
});
