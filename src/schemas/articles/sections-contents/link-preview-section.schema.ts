import z from "zod";

export const linkPreviewSectionSchema = z.object({
    type: z.literal("LINK_PREVIEW", { error: "O tipo de conteúdo deve ser 'LINK_PREVIEW'." }),
    content: z.object({
        url: z.url({ error: "Insira uma URL válida." }).max(2048, { error: "A URL deve ter no máximo 2048 caracteres." }),
        title: z.string({ error: "O título da prévia é inválido." }).min(1, { error: "O título da prévia deve ter pelo menos 1 caractere." }).max(255, { error: "O título da prévia deve ter no máximo 255 caracteres." }),
        description: z.string({ error: "A descrição da prévia é inválida." }).min(1, { error: "A descrição da prévia deve ter pelo menos 1 caractere." }).max(5000, { error: "A descrição da prévia deve ter no máximo 5000 caracteres." }),
        imageUrl: z.url({ error: "Insira uma URL de imagem válida." }).max(2048, { error: "A URL da imagem deve ter no máximo 2048 caracteres." }),
    })
})