import z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";

export const createSessionSchema = z.object({
    userId: z.uuidv4({ error: "O campo 'userId' deve ser um UUID válido." }),
    tokenHash: z.hex({ error: "O campo 'tokenHash' deve ser uma string hexadecimal válida." }).length(64, { error: "O campo 'tokenHash' deve ter exatamente 64 caracteres." }),
    expiresAt: z.date({ error: "O campo 'expiresAt' deve ser uma data válida." }),
    revokedAt: z.date({ error: "O campo 'revokedAt' deve ser uma data válida." }).optional(),
    replacedByToken: z.uuidv4({ error: "O campo 'replacedByToken' deve ser um UUID válido." }).optional(),
})

export type CreateSessionDTOType = z.infer<typeof createSessionSchema>;

export class CreateSessionDTO extends AbstractDTO<typeof createSessionSchema> {
    protected rules() {
        return createSessionSchema;
    }
}