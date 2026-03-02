import z from "zod";

export const refreshTokenPayloadSchema = z.object({
    sub: z.string().trim().pipe(z.cuid({ error: "ID de usuário inválido." })),
    tid: z.string().trim().pipe(z.uuidv4({ error: "ID do token inválido." }))
})
