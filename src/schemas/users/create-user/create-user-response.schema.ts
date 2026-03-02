import { createUserRequestSchema } from "./create-user-request.schema.js";

export const createUserResponseSchema = createUserRequestSchema.pick({ username: true })