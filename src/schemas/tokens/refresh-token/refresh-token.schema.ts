import z from "zod"

export const refreshTokenSchema = z.string().trim().pipe(z.jwt({ error: "Refresh token inválido.", alg: "HS256" }))