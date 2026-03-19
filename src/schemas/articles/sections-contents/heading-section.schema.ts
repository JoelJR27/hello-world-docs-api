import z from "zod";
import { zStringSanitized } from "../../../utils/z-string-sanitized.js";

export const headingSectionSchema = z.object({
    type: z.literal("HEADING", { error: "Tipo de conteúdo da seção deve ser um cabeçalho." }),
    content: z.object({
        level: z.int({ error: "Formato do nível do cabeçalho é inválido." }).min(1, { error: "Nível do cabeçalho deve ser no mínimo 1." }).max(6, { error: "Nível do cabeçalho deve ser no máximo 6." }),
        text: zStringSanitized("Input inválido para o texto do cabeçalho.").pipe(z.string().min(1, { error: "Texto do cabeçalho deve ter pelo menos 1 caractere." }).max(500, { error: "Texto do cabeçalho deve ter no máximo 500 caracteres." })),
    }),
})
