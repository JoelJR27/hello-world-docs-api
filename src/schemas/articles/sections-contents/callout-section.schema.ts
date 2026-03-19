import z from "zod";

export const calloutSectionSchema = z.object({
    type: z.literal("CALLOUT", { error: "O tipo de conteúdo deve ser 'CALLOUT'." }),
    content: z.object({
        variant: z.enum(["INFO", "WARNING", "SUCCESS", "ERROR", "TIP"], { error: "O tipo de callout deve ser 'INFO', 'WARNING', 'SUCCESS', 'ERROR' ou 'TIP'." }),
        text: z.string({ error: "O texto do callout é inválido." }).min(1, { error: "O texto do callout deve ter pelo menos 1 caractere." }).max(5000, { error: "O texto do callout deve ter no máximo 5000 caracteres." }),
    })
})