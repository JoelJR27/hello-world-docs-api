import { describe, expect, it } from "vitest"
import { AccessTokenPayloadDTO } from "../../../dtos/tokens/access-token/access-token-payload.dto.js"

describe("AccessTokenPayloadDTO", () => {
    const validPayload = {
        sub: "cmlvhbdrq000004kyhzk52d0f",
        role: "USER"
    }

    it("should create a valid payload", () => {
        expect(new AccessTokenPayloadDTO(validPayload).getAll()).toEqual(validPayload)
    })

    it("should create a valid payload with the role USER when the role is blank", () => {
        expect(new AccessTokenPayloadDTO({ sub: validPayload.sub }).getAll()).toEqual(validPayload)
    })

    it("should throw a validation error for invalid role", () => {
        const adminPayload = {
            ...validPayload,
            role: "GUEST"
        }

        expect(() => new AccessTokenPayloadDTO(adminPayload)).toThrowError("Role inválida.")
    })
})