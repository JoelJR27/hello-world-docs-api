import z from "zod"

export const tokenTypes = ["EMAIL_VERIFICATION", "PASSWORD_RESET", "CHANGE_EMAIL"]

export type TokenTypes = (typeof tokenTypes)[number]

export const ValidationTokens = z.enum(tokenTypes)