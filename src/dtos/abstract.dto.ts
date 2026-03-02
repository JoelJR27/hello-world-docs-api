import z, { ZodError, ZodType } from "zod";
import { ValidationError } from "../errors/validation.error.js";
import { AppError } from "../errors/app.error.js";

type ReceivedData = Record<string, unknown>;

export abstract class AbstractDTO<Schema extends ZodType> {
    protected data: z.infer<Schema> = {} as z.infer<Schema>;

    public constructor(data: ReceivedData) {
        this.validate(data)
    }

    protected abstract rules(): Schema

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

            if (error instanceof ZodError) {
                throw new ValidationError(error)
            }

            // TODO: if (error instanceof PrismaClientKnownRequestError) {

            // }

            throw new AppError("Erro interno do servidor.", 500)
        }
    }
}