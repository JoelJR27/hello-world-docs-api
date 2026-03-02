import { describe, expect, it } from "vitest"
import { RefreshTokenPayloadDTO } from "../../../dtos/tokens/refresh-token/refresh-token-payload.dto.js"

describe("RefreshTokenPayloadDTO", () => {
    const validPayload = {
        sub: "cmlvhbdrq000004kyhzk52d0f",
        tid: "0b93e15d-7f13-42e1-a80c-7b15fcd3d2d5"
    }

    it("should create a valid payload", () => {
        const payload = new RefreshTokenPayloadDTO(validPayload).getAll()

        expect(payload).toEqual(validPayload)
    })

    it("should throw a validation error when receive an invalid sub", () => {
        const invalidSub = {
            ...validPayload,
            sub: "test_sub"
        }

        expect(() => new RefreshTokenPayloadDTO(invalidSub)).toThrowError("ID de usuário inválido.")
    })

    it("should throw a validation error when receive an invalid tid", () => {
        const invalidTid = {
            ...validPayload,
            tid: "test_tid"
        }

        expect(() => new RefreshTokenPayloadDTO(invalidTid)).toThrowError("ID do token inválido.")
    })

    it("should trim blank spaces aroun the sub field and create the DTO", () => {
        const subWithSpaces = {
            ...validPayload,
            sub: "   cmlvhbdrq000004kyhzk52d0f   ",
        }

        expect(new RefreshTokenPayloadDTO(subWithSpaces).get("sub")).toEqual(validPayload.sub)
    })

    it("should trim blank spaces around the tid field and create the DTO", () => {
        const tidWithSpaces = {
            ...validPayload,
            tid: "   0b93e15d-7f13-42e1-a80c-7b15fcd3d2d5   "
        }

        expect(new RefreshTokenPayloadDTO(tidWithSpaces).get("tid")).toEqual(validPayload.tid)
    })
})