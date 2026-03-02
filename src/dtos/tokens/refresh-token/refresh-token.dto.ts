import { refreshTokenSchema } from "../../../schemas/tokens/refresh-token/refresh-token.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class RefreshTokenDTO extends AbstractDTO<typeof refreshTokenSchema> {
    rules() {
        return refreshTokenSchema
    }
}