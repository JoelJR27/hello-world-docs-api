import express, { type Application } from "express";

const app: Application = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).send("Hello, World!");
});


export default app;