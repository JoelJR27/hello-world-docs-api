import { AbstractDTO } from "../../../shared/utils/abstract.dto.js";
import { createUserSchema } from "./create-user.dto.js";

export const updateUserSchema = createUserSchema.partial().refine((data) => {
    return Object.keys(data).length > 0;
}, {
    message: "Pelo menos um campo deve ser fornecido para atualização",
});

export type UpdateUserDTOType = ReturnType<typeof updateUserSchema.parse>;

export class UpdateUserDTO extends AbstractDTO<typeof updateUserSchema> {
    rules() {
        return updateUserSchema
    }
}