import z from "zod"

export const userRoles = ["ADMIN", "MODERATOR", "AUTHOR", "USER"] as const

export type Role = (typeof userRoles)[number] // Tipagem interna

export const RolesEnum = z.enum(userRoles) // Validação de DTOs e entrada de dados dos usuários