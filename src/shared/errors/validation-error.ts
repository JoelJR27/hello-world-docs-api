import type z from "zod"

export class ValidationError {
    public readonly message: string
    public readonly statusCode: number
    public readonly issues: z.core.$ZodIssue[]

    constructor(error: z.ZodError, statusCode = 400) {
        this.message = error.issues.map(issue => issue.message).join(" / ") 
        console.error(this.message)
        this.issues = error.issues
        this.statusCode = statusCode
    }
}