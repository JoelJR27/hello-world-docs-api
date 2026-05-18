
import type { Article, PrismaClient } from "../../../generated/prisma/client.js";
import type { CreateArticleDTO } from "./dto/create-article.dto.js";
import { handlePrismaError } from "../../shared/errors/handle-prisma.error.js";
import type { UpdateArticleDTO } from "./dto/update-article.dto.js";
import type { Repository } from "../../shared/interfaces/repository.interface.js";
import type { SlugRepository } from "../../shared/interfaces/slug-repository.js";

export class ArticleRepository implements
    Repository<Article, CreateArticleDTO, UpdateArticleDTO>,
    SlugRepository<Article> {
    private database: PrismaClient
    constructor(database: PrismaClient) {
        this.database = database
    }

    async findAll(): Promise<Article[]> {
        try {
            return await this.database.article.findMany()
        } catch (error) {
            throw handlePrismaError(error)
        }
    }

    async findBySlug(slug: string): Promise<Article | null> {
        try {
            return await this.database.article.findUnique({
                where: {
                    slug
                }
            })
        } catch (error) {
            throw handlePrismaError(error)
        }
    }

    async create(dto: CreateArticleDTO): Promise<Article> {
        try {
            return await this.database.article.create({
                data: dto.toPrisma()
            })
        } catch (error) {
            throw handlePrismaError(error)
        }
    }

    async update(id: string, updateDTO: UpdateArticleDTO): Promise<Article> {
        try {
            return await this.database.article.update({
                where: {
                    id
                },
                data: updateDTO.toPrisma()
            })
        } catch (error) {
            throw handlePrismaError(error)
        }
    }

    async delete(id: string): Promise<Article> {
        try {
            return await this.database.article.delete({
                where: {
                    id
                }
            })
        } catch (error) {
            throw handlePrismaError(error)
        }
    }
}