
import { jwtTokenSchemas } from "../../schemas/tokens/jwt-schema.js";
import { AbstractDTO } from "../abstract.dto.js";

export class JWTTokenDTO extends AbstractDTO<typeof jwtTokenSchemas> {
    rules() {
        return jwtTokenSchemas
    }
}