import type z from "zod";
import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import { createSessionSchema } from "./create-session.dto.js";

export const updateSessionSchema = createSessionSchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateSessionDTOType = z.infer<typeof updateSessionSchema>;

export class UpdateSessionDTO extends AbstractDTO<typeof updateSessionSchema> {
    protected rules() {
        return updateSessionSchema;
    }
}