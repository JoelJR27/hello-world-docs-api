import z from "zod";

export const jwtTokenSchemas = z.object({ token: z.string({ error: "Formato inválido de token fornecido." }).trim().pipe(z.jwt({ error: "O token fornecido é inválido" })) })