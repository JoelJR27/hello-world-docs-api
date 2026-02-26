import { z } from "zod"
import { sanitizeString } from "./sanitize-string.js"

export const zStringSanitized = (validationError: string) =>
    z.string({error: validationError}).transform((val) => sanitizeString(val))