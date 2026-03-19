import z from "zod";

export const videoSectionSchema = z.object({
    type: z.literal("VIDEO", { error: "O tipo de conteúdo deve ser 'VIDEO'." }),
    content: z.object({
        url: z.url({ error: "O URL do vídeo deve ser uma URL válida." }),
        caption: z.string({ error: "A legenda do vídeo é inválida." }).trim().max(200, { error: "A legenda do vídeo deve ter no máximo 200 caracteres." }).optional(),
    })
})