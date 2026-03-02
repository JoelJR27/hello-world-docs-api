import { createUserRequestSchema } from "../../../schemas/users/create-user/create-user-request.schema.js"; 
import { AbstractDTO } from "../../abstract.dto.js";

export class CreateUserRequestDTO extends AbstractDTO<typeof createUserRequestSchema> {
    protected rules() {
        return createUserRequestSchema
    }
}