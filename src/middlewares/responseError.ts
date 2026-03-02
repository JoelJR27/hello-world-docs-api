import type { NextFunction, Request, Response } from "express";

import { ValidationError } from "../errors/validation.error.js";

export default function responseError(error: Error, _request: Request, response: Response, next: NextFunction): Response {
    if (error instanceof ValidationError) {
        return response.status(error.statusCode).send({
            status: "error",
            message: error.message,
            issues: error.issues
        })
    }

    return response.status(500).send({
        status: "error",
        message: "Erro interno do servidor"
    })
}