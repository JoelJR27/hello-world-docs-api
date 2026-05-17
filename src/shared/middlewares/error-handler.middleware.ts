import type { NextFunction, Request, Response } from "express";
import { ValidationError } from "../errors/validation-error.js";
import { PrismaError } from "../errors/prisma.error.js";

export default function errorHandler(error: Error, _request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).send({
            status: "error",
            message: error.message,
            issues: error.issues
        })
    }
    
    if(error instanceof PrismaError) {
        return response.status(error.statusCode).send({
            status: "error",
            message: error.message
        })
    }

    return response.status(500).send({
        status: "error",
        message: "Erro interno do servidor"
    })
}