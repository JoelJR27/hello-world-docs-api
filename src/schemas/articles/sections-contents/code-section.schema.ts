import z from "zod";

export const codeSectionSchema = z.object({
    type: z.literal("CODE", { error: "O tipo de conteúdo deve ser 'CODE'." }),
    content: z.object({
        language: z.string({ error: "Insira uma liguagem válida!" }).min(2, { error: "O idioma do código deve ter pelo menos 2 caracteres." }).max(50, { error: "O tamanho máximo para o nome da linguagem é de 50 caracteres." }),
        code: z.string({ error: "O texto do código é inválido." }).min(1, { error: "O texto do código deve ter pelo menos 1 caractere." }).max(10000, { error: "O texto do código deve ter no máximo 10000 caracteres." }),
    })
})