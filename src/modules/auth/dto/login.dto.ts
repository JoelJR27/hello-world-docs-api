import { z } from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import type { Prisma } from "../../../../generated/prisma/browser.js";

export const loginSchema = z.object({
    email: z.email({ error: "Email inválido." }).trim().max(255, { error: "O email deve ter no máximo 255 caracteres." }),
    password: z
        .string({ error: "A senha deve ser do formato texto." })
        .min(6, { error: "A senha deve conter no mínimo 6 caracteres." })
        .regex(/[A-Z]/, { error: "A senha deve conter ao menos uma letra maiúscula." })
        .regex(/[a-z]/, { error: "A senha deve conter ao menos uma letra minúscula." })
        .regex(/[0-9]/, { error: "A senha deve conter ao menos um número." })
        .regex(/[^A-Za-z0-9]/, { error: "A senha deve conter ao menos um caractere especial." }).regex(/^\S+$/, {
            error: "A senha não pode conter espaços.",
        }).max(25, { error: "A senha deve ter no máximo 25 caracteres." })
})

type LoginDTOType = z.infer<typeof loginSchema>

export class LoginDTO extends AbstractDTO<typeof loginSchema, LoginDTOType> {

    rules() {
        return loginSchema
    }


    toPrisma(): LoginDTOType {
        return {
            email: this.data.email,
            password: this.data.password
        }
    }
}