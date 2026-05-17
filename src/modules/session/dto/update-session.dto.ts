import type z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import { createSessionSchema } from "./create-session.dto.js";
import type { Prisma } from "../../../../generated/prisma/client.js";



export const updateSessionSchema = createSessionSchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateSessionDTOType = z.infer<typeof updateSessionSchema>;

export class UpdateSessionDTO extends AbstractDTO<typeof updateSessionSchema, Prisma.SessionUncheckedUpdateManyInput> {
    protected rules() {
        return updateSessionSchema;
    }

    toPrisma(): Prisma.SessionUncheckedUpdateManyInput {
        return {
            ...(this.data.userId !== undefined && {
                categoryId: this.data.userId,
            }),

            ...(this.data.tokenHash !== undefined && {
                tokenHash: this.data.tokenHash,
            }),

            ...(this.data.expiresAt !== undefined && {
                expiresAt: this.data.expiresAt,
            }),

            ...(this.data.revokedAt !== undefined && {
                revokedAt: this.data.revokedAt,
            }),

            ...(this.data.replacedBy !== undefined && {
                replacedByToken: this.data.replacedBy,
            })
        }
    }
}