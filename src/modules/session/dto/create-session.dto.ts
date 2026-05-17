import z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const createSessionSchema = z.object({
    userId: z.uuidv4({ error: "O campo 'userId' deve ser um UUID válido." }),
    tokenHash: z.hex({ error: "O campo 'tokenHash' deve ser uma string hexadecimal válida." }).length(64, { error: "O campo 'tokenHash' deve ter exatamente 64 caracteres." }),
    expiresAt: z.date({ error: "O campo 'expiresAt' deve ser uma data válida." }),
    revokedAt: z.date({ error: "O campo 'revokedAt' deve ser uma data válida." }).optional(),
    replacedBy: z.uuidv4({ error: "O campo 'replacedByToken' deve ser um UUID válido." }).optional(),
})

export type CreateSessionDTOType = z.infer<typeof createSessionSchema>;

export class CreateSessionDTO extends AbstractDTO<typeof createSessionSchema, Prisma.SessionUncheckedCreateInput> {
    protected rules() {
        return createSessionSchema;
    }

    toPrisma(): Prisma.SessionUncheckedCreateInput {
        return {
            userId: this.data.userId,
            tokenHash: this.data.tokenHash,
            expiresAt: this.data.expiresAt,

            ...(this.data.revokedAt !== undefined && {
                revokedAt: this.data.revokedAt,
            }),

            ...(this.data.replacedBy !== undefined && {
                replacedBy: this.data.replacedBy,
            }),
        }
    }
}