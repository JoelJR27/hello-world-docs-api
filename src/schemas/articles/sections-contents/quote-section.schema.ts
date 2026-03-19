import z from "zod";

export const quoteSectionSchema = z.object({
    type: z.literal("QUOTE", { error: "O tipo da seção deve ser 'QUOTE'." }),
    content: z.object({
        text: z.string({ error: "Formato do texto é inválido." }).trim().min(1, { error: "Texto da citação não pode ser vazio." }),
        author: z.string({ error: "Formato do autor é inválido." }).trim().min(1, { error: "Autor da citação não pode ser vazio." }).optional(),
    })
})