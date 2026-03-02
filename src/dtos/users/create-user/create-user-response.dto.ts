import { createUserResponseSchema } from "../../../schemas/users/create-user/create-user-response.schema.js"; 
import { AbstractDTO } from "../../abstract.dto.js"; 

export class CreateUserResponseDTO extends AbstractDTO<typeof createUserResponseSchema> {
    rules() {
        return createUserResponseSchema
    }
}