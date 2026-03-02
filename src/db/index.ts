import "dotenv/config"
import { PrismaClient } from "../../generated/prisma/client.js";
import { PrismaPg } from "@prisma/adapter-pg";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL não está definida no arquivo .env");
}

const adapter = new PrismaPg({ connectionString });

export const database = new PrismaClient({
    adapter, log: ["query", "error", "warn"],
});
