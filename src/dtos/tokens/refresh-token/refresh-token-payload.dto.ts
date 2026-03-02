import type { JWTPayload } from "jose";
import { refreshTokenPayloadSchema } from "../../../schemas/tokens/refresh-token/refresh-token-payload.schema.js";
import { AbstractDTO } from "../../abstract.dto.js";

export class RefreshTokenPayloadDTO extends AbstractDTO<typeof refreshTokenPayloadSchema> {
    rules() {
        return refreshTokenPayloadSchema
    }

    toJWTPayload(): JWTPayload {
        const data = this.getAll()
        return {
            ...data
        }
    }
}