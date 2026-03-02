
import type { JWTPayload } from "jose";
import { createAccessTokenPayloadSchema } from "../../../schemas/tokens/access-token/access-token.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";


export class AccessTokenPayloadDTO extends AbstractDTO<typeof createAccessTokenPayloadSchema> {
    rules() {
        return createAccessTokenPayloadSchema
    }

    toJWTPayload(): JWTPayload {
            const data = this.getAll()
            return {
                ...data
            }
        }
}