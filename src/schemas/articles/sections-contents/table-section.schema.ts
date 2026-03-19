import z from "zod";

export const tableSectionSchema = z.object({
    type: z.literal("TABLE", { error: "O tipo de conteúdo deve ser 'TABLE'." }),
    content: z.object({
        headers: z.array(z.string({ error: "O cabeçalho da tabela é inválido." }).trim().min(1, { error: "Cada cabeçalho da tabela deve ter pelo menos 1 caractere." })).min(1, { error: "A tabela deve conter pelo menos um cabeçalho." }),
        rows: z.array(z.array(z.string({ error: "O conteúdo da célula é inválido." }).trim().min(1, { error: "Cada célula da tabela deve ter pelo menos 1 caractere." })).min(1, { error: "Cada linha da tabela deve conter pelo menos uma célula." })).min(1, { error: "A tabela deve conter pelo menos uma linha." }),
    })
})