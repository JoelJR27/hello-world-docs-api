import { describe, expect, it } from "vitest";
import { CreateUserResponseDTO } from "../../../dtos/users/create-user/create-user-response.dto.js";



describe("CreateUserResponseDTO", () => {
    
    it("should create a new CreateUserResponseDTO with valid data", () => {
        const validData = {
            username: "test_username"
        }
        const createUserResponseDTO = new CreateUserResponseDTO(validData)

        expect(createUserResponseDTO.getAll()).toEqual(validData)
    })

    it("should throw a validation error for invalid username", () => {
        const invalidUsername = {
            username: "te"
        }

        expect(() => new CreateUserResponseDTO(invalidUsername)).toThrowError("O nome de usuário deve conter ao menos 3 caracteres.")
    })

    it("should throw a validation error for username only with numbers", () => {
        const usernameWithoutCharacters = {
            username: "12321412"
        }

        expect(() => new CreateUserResponseDTO(usernameWithoutCharacters)).toThrowError("O username deve conter ao menos 1 letra.")
    })

    it("should throw a validation error for username with blank spaces", () => {
        const usernameWithBlankSpace = {
            username: "username test"
        }

        expect(() => new CreateUserResponseDTO(usernameWithBlankSpace)).toThrowError("O nome de usuário não pode conter espaços.")
    })

    it("should throw a validation error when username is missing", () => {
        expect(() => new CreateUserResponseDTO({})).toThrowError("Insira um nome de usuário válido!")
    })

    it("should throw a validation error when username is not a string", () => {
        expect(() => new CreateUserResponseDTO({ username: 1234 })).toThrowError("Insira um nome de usuário válido!")
    })
})