import { describe, expect, it } from "vitest"
import { CreateUserRequestDTO } from "../../../dtos/users/create-user/create-user-request.dto.js"


describe("CreateUserRequestDTO", () => {
    const validData = {
        username: "testuser",
        email: "testuser@example.com",
        password: "Password123!"
    }
    it("should create a new user request DTO with valid data", () => {
        const createUserRequestDTO = new CreateUserRequestDTO(validData)

        expect(createUserRequestDTO.getAll()).toEqual(validData)
    })

    it("should throw a validation error for invalid data", () => {
        const invalidData = {
            username: "tu",
            email: "invalid-email",
            password: "pass"
        }
        expect(() => new CreateUserRequestDTO(invalidData)).toThrowError("O nome de usuário deve conter ao menos 3 caracteres.")
    })

    it("should throw a validation error for username with spaces", () => {
        const invalidUsername = {
            ...validData,
            username: "test user",
        }
        expect(() => new CreateUserRequestDTO(invalidUsername)).toThrowError("O nome de usuário não pode conter espaços.")
    })

    it("should throw a validation error for password without uppercase letter", () => {
        const passwordWithoutUppercase = {
            ...validData,
            password: "password123!"
        }
        expect(() => new CreateUserRequestDTO(passwordWithoutUppercase)).toThrowError("A senha deve conter ao menos uma letra maiúscula.")
    })

    it("should throw a validation error for password without lowercase letter", () => {
        const passwordWithoutLowercase = {
            ...validData,
            password: "PASSWORD123!"
        }

        expect(() => new CreateUserRequestDTO(passwordWithoutLowercase)).toThrowError("A senha deve conter ao menos uma letra minúscula.")
    })

    it("should throw a validation error for password without a special character", () => {
        const passwordWithoutSpecialCharacter = {
            ...validData,
            password: "Password123"
        }

        expect(() => new CreateUserRequestDTO(passwordWithoutSpecialCharacter)).toThrowError("A senha deve conter ao menos um caractere especial.")
    })

    it("should throw a validation error for password without a number", () => {
        const passwordWithoutNumber = {
            ...validData,
            password: "Password!"
        }

        expect(() => new CreateUserRequestDTO(passwordWithoutNumber)).toThrowError("A senha deve conter ao menos um número.")
    })

    it("should throw a validation error for password with blank spaces", () => {
        const passwordWithBlankSpaces = {
            ...validData,
            password: "Pass word123!"
        }

        expect(() => new CreateUserRequestDTO(passwordWithBlankSpaces)).toThrowError("A senha não pode conter espaços.")
    })
})