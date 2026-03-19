import { describe, it, expect } from "vitest";
import { CreateArticleVersionResponseDTO } from "../../../../dtos/articles/create-article-version/create-article-version.response.dto.js";

describe("CreateArticleVersionResponseDto", () => {
    const validResponse = {
        articleId: "ckv1234567890abcdefg",
        version: 1.6
    }
    it("should create a valid response DTO", () => {
        expect(new CreateArticleVersionResponseDTO(validResponse).getAll()).toEqual(validResponse);
    })

    it("should throw an error if articleId is missing", () => {
        const invalidResponse = {
            version: validResponse.version
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("ID de artigo inválido!");
    })

    it ("should throw an error if articleId is not a string", () => {
        const invalidResponse = {
            ...validResponse,
            articleId: 1234567890
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("ID de artigo inválido!");
    })

    it("should throw an error if articleId is not a valid cuid", () => {
        const invalidResponse = {
            ...validResponse,
            articleId: "invalid-cuid"
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("ID de artigo inválido!");
    })


    it("should throw an error if version is not a number", () => {
        const invalidResponse = {
            ...validResponse,
            version: "1.6"
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("A versão do artigo deve ser representada por um número!");
    })

    it("should throw an error if version is not positive", () => {
        const invalidResponse = {
            ...validResponse,
            version: -1.6
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("O número da versão deve ser no mínimo 1!");
    })

    it("should throw an error if version is missing", () => {
        const invalidResponse = {
            articleId: validResponse.articleId
        }

        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("A versão do artigo deve ser representada por um número!");
    })

    it("should throw an error if version is zero", () => {
        const invalidResponse = {
            ...validResponse,
            version: 0
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("O número da versão deve ser no mínimo 1!");
    })

    it("should throw an error if version is less than 1", () => {
        const invalidResponse = {
            ...validResponse,
            version: 0.5
        }
        expect(() => new CreateArticleVersionResponseDTO(invalidResponse)).toThrowError("O número da versão deve ser no mínimo 1!");
    })

});   