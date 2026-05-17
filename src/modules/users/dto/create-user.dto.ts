import z from "zod";
import { loginSchema } from "../../auth/dto/login.dto.js";
import { userRolesEnum } from "../../../shared/enums/user-roles.js";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const createUserSchema = z.object({
    username: z.string({ error: "O nome de usuário deve ser do tipo texto" }).trim().min(3, { error: "O nome de usuário deve conter no mínimo 3 caracteres" }).max(30, { error: "O nome de usuário deve conter no máximo 30 caracteres" }).regex(/^[a-zA-Z0-9_]+$/, { error: "O nome de usuário só pode conter letras, números e underscores" }),
    email: z.email({ error: "Formato de email inválido" }).trim().max(255, { error: "O email deve conter no máximo 255 caracteres" }),
    password: loginSchema.pick({ password: true }).shape.password,
    role: userRolesEnum.default("USER").describe("O papel do usuário, que pode ser 'user' ou 'admin'. Se não for fornecido, o padrão será 'user'."),
})

export type CreateUserDTOType = z.infer<typeof createUserSchema>;

export class CreateUserDTO extends AbstractDTO<typeof createUserSchema, Prisma.UserUncheckedCreateInput> {
    rules() {
        return createUserSchema
    }

    protected toPrisma(): Prisma.UserUncheckedCreateInput {
        return {
            username: this.data.username,
            email: this.data.email,
            password: this.data.password,
            role: this.data.role,
        }
    }
}
