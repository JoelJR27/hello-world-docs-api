import { z, type ZodType } from "zod";
import { ValidationError } from "../errors/validation-error.js"; 
import { AppError } from "../errors/app-error.js";
import type { Prisma } from "../../../generated/prisma/client.js";

type ReceivedData = Record<string, unknown>;

export abstract class AbstractDTO<Schema extends ZodType, PD> {
    protected data: z.infer<Schema> = {} as z.infer<Schema>;

    public constructor(data: ReceivedData) {
        this.validate(data)
    }

    protected abstract rules(): Schema
    protected abstract toPrisma(): PD

    getAll(): z.infer<Schema> {
        return this.data
    }

    get<Key extends keyof z.infer<Schema>>(key: Key) {
        return this.data[key]
    }

    private validate(data: ReceivedData) {
        try {
            this.data = this.rules().parse(data)
        } catch (error) {
            console.error(error)

            if (error instanceof z.ZodError) {
                throw new ValidationError(error)
            }

            throw new AppError("Erro interno do servidor.", 500)
        }
    }
}