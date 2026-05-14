import z from "zod";

export const userRolesEnum = z.enum(["USER", "AUTHOR", "MODERATOR", "ADMIN"]);

export type UserRoles = z.infer<typeof userRolesEnum>;
