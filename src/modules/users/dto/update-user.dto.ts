import type { Prisma } from "../../../../generated/prisma/browser.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import { createUserSchema } from "./create-user.dto.js";

export const updateUserSchema = createUserSchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateUserDTOType = ReturnType<typeof updateUserSchema.parse>;

export class UpdateUserDTO extends AbstractDTO<typeof updateUserSchema, Prisma.UserUncheckedUpdateInput> {
    rules() {
        return updateUserSchema
    }

    protected toPrisma(): Prisma.UserUncheckedUpdateInput {
        return {
            ...(this.data.username !== undefined && {
                username: this.data.username
            }),

            ...(this.data.email !== undefined && {
                email: this.data.email
            }),

            ...(this.data.password !== undefined && {
                password: this.data.password
            }),

            ...(this.data.role !== undefined && {
                role: this.data.role
            })
        }
    }
}