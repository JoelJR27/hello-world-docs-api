import z from "zod";
import { zStringSanitized } from "../../../utils/z-string-sanitized.js";


export const createUserRequestSchema = z.object({
    username: zStringSanitized("Insira um nome de usuário válido!").pipe(z.string({ error: "Formato inválido para o nome de usuário!" }).min(3, { error: "O nome de usuário deve conter ao menos 3 caracteres." })
        .regex(/^\S+$/, {
            error: "O nome de usuário não pode conter espaços.",
        }).regex(/[a-zA-Z]/, { error: "O username deve conter ao menos 1 letra." })),

    email: z.email({ error: "Email inválido!" }).trim().max(255, { error: "O email deve ter no máximo 255 caracteres." }),
    password: zStringSanitized("Insira uma senha válida!").pipe(z
        .string()
        .min(6, { error: "A senha deve conter no mínimo 6 caracteres." })
        .regex(/[A-Z]/, { error: "A senha deve conter ao menos uma letra maiúscula." })
        .regex(/[a-z]/, { error: "A senha deve conter ao menos uma letra minúscula." })
        .regex(/[0-9]/, { error: "A senha deve conter ao menos um número." })
        .regex(/[^A-Za-z0-9]/, { error: "A senha deve conter ao menos um caractere especial." }).regex(/^\S+$/, {
            error: "A senha não pode conter espaços.",
        }))
})