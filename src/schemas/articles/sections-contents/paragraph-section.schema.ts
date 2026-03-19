import z from "zod";

export const paragraphSectionSchema = z.object({
    type: z.literal("PARAGRAPH", { error: "Tipo de conteúdo da seção deve ser um parágrafo." }),
    content: z.object({
        text: z.string({ error: "Formato do texto do parágrafo é inválido." }).min(1, { error: "Texto do parágrafo deve ter pelo menos 1 caractere." }).max(5000, { error: "Texto do parágrafo deve ter no máximo 5000 caracteres." }),
    }),
})