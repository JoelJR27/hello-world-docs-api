import { describe, it, expect } from "vitest";
import { CreateArticleVersionRequestDTO } from "../../../../dtos/articles/create-article-version/create-article-version-request.dto.js";

describe("CreateArticleVersionRequestDto", () => {
    it("should create an instance of CreateArticleVersionRequestDto", () => {
        const validData = {
            articleId: "ckl1v9z5e0000qzj8h1a2b3c",
            version: 1.1
        }
        const dto = new CreateArticleVersionRequestDTO(validData)

        expect(dto).toBeInstanceOf(CreateArticleVersionRequestDTO);
        expect(dto.getAll()).toEqual(validData);
    })

    it("should throw an error if articleId is invalid", () => {
        const invalidData = {
            articleId: "invalid-id",
            version: 1.1
        }
        expect(() => new CreateArticleVersionRequestDTO(invalidData)).toThrow("ID de artigo inválido!");
    })

    it("should throw an error if version is not a number", () => {
        const invalidData = {
            articleId: "ckl1v9z5e0000qzj8h1a2b3c",
            version: "1.3"
        }
        expect(() => new CreateArticleVersionRequestDTO(invalidData)).toThrow("A versão do artigo deve ser representada por um número!");
    })

    it("should throw an error if version is not positive", () => {
        const invalidData = {
            articleId: "ckl1v9z5e0000qzj8h1a2b3c",
            version: -1.0
        }
        expect(() => new CreateArticleVersionRequestDTO(invalidData)).toThrow("O número da versão deve ser no mínimo 1!");
    })

    it("should throw an error if required fields are missing", () => {
        const invalidData = {}
        expect(() => new CreateArticleVersionRequestDTO(invalidData)).toThrowError();
    })
});