import z from "zod";

export const listSectionSchema = z.object({
    type: z.literal("LIST", { error: "Tipo de conteúdo deve ser 'LIST'." }),
    content: z.object({
        ordered: z.boolean({ error: "Campo 'ordered' deve ser um verdadeiro ou falso." }),
        items: z.array(z.string({ error: "Formato do item é inválido." }).trim().min(1, { error: "Cada item da lista deve ter pelo menos 1 caractere." })).min(1, { error: "A lista deve conter pelo menos um item." }),
    })
})