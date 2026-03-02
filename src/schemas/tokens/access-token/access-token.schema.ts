import z from "zod";
import { RolesEnum } from "../../../enums/user-roles.js";

export const createAccessTokenPayloadSchema = z.object({
    sub: z.string().trim().pipe(z.cuid({ error: "ID de usuário inválido." })),
    role: RolesEnum.default("USER").optional(),
})