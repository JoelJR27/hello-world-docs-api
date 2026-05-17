
import { PrismaClientKnownRequestError } from "../../../generated/prisma/internal/prismaNamespace.js"
import { PrismaError } from "./prisma.error.js"

export function handlePrismaError(error: unknown): Error {
    if (error instanceof PrismaClientKnownRequestError) {
        switch (error.code) {
            case "P2002":
                return new PrismaError(
                    "Um ou mais campos possuem valores duplicados.",
                    409
                )

            case "P2025":
                return new PrismaError(
                    "Registro não encontrado.",
                    404
                )

            case "P2003":
                return new PrismaError(
                    "Violação de chave estrangeira.",
                    400
                )

            default:
                return new PrismaError(
                    "Erro de banco de dados.",
                    500
                )
        }
    }

    if (error instanceof Error) {
        return error
    }

    return new Error("Erro desconhecido.")
}