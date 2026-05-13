import express, { type Application } from 'express';
import errorHandler from '../shared/middlewares/error-handler.middleware.js';

export const app: Application = express();

app.use(express.json());

app.get("/", (request, response) => {
    return response.status(200).send({ message: "API rodando com sucesso!" })
});

app.use(errorHandler);

export default app;