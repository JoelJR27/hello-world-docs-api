import { z, ZodError } from "zod"

export class ValidationError {
    public readonly message: string
    public readonly statusCode: number
    public readonly issues: z.core.$ZodIssue[]

    constructor(error: ZodError, statusCode = 400) {
        const [firstError] = error.issues
        const { message } = firstError!
        this.message = message
        this.issues = error.issues
        this.statusCode = statusCode
    }
}