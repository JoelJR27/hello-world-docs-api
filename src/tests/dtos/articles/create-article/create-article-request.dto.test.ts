import { describe, it, expect } from "vitest";
import { CreateArticleRequestDTO as CreateArticleRequestDTO } from "../../../../dtos/articles/create-article/create-article-request.dto.js";

describe("CreateArticleRequestDto", () => {

    it("should validate a valid article creation request", () => {
        const validData = {
            title: "Um título válido para o artigo",
            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo.",
            categoryId: "ckl1v9z5e0000qzj8h1a2b3c",
            subcategoryId: "ckl1v9z5e0001qzj8h1a2b3d"
        };
        const dto = new CreateArticleRequestDTO(validData);
        expect(dto.getAll()).toEqual(validData);
    })

    it("should throw an error if title field is missing", () => {
        const invalidData = {

            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo."
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("É necessário fornecer um título para o artigo.");
    })

    it("should throw an error if slug field is missing", () => {
        const invalidData = {
            title: "Um título válido para o artigo",
            description: "Uma descrição válida para o artigo."
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("É necessário fornecer um slug para o artigo.");
    })

    it("should throw an error if title field is empty", () => {
        const invalidData = {
            title: "   ",
            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo."
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("O título do artigo não pode ser vazio.");
    })

    it("should throw an error if slug field is empty", () => {
        const invalidData = {
            title: "Um título válido para o artigo",
            slug: "   ",
            description: "Uma descrição válida para o artigo."
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("O slug do artigo não pode ser vazio.");
    })

    it("should throw an error if categoryId is not a valid CUID", () => {
        const invalidData = {
            title: "Um título válido para o artigo",
            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo.",
            categoryId: "invalid-cuid"
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("ID inválido fornecido!");
    })

    it("should throw an error if subcategoryId is not a valid CUID", () => {
        const invalidData = {
            title: "Um título válido para o artigo",
            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo.",
            subcategoryId: "invalid-cuid"
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("ID inválido fornecido!");
    })

    it("should allow optional fields to be omitted", () => {
        const validData = {
            title: "Um título válido para o artigo",
            slug: "um-slug-valido-para-o-artigo"
        };
        const dto = new CreateArticleRequestDTO(validData);
        expect(dto.getAll()).toEqual(validData);
    })

    it("should throw an error if description field is empty", () => {
        const invalidData = {
            title: "Um título válido para o artigo",
            slug: "um-slug-valido-para-o-artigo",
            description: "   "
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError("A descrição do artigo não pode ser vazia.");
    })

    it("should throw an error if title field has invalid format", () => {
        const invalidData = {
            title: ["Invalid", "Title"],
            slug: "um-slug-valido-para-o-artigo",
            description: "Uma descrição válida para o artigo."
        };
        expect(() => new CreateArticleRequestDTO(invalidData)).toThrowError();
    })
})