import { UserBusiness } from "../../src/business/UserBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { HashManagerMock } from "../mocks/services/HashManagerMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { UserDataBaseMock } from "../mocks/UserDataBaseMock";
import { ILoginInputDTO } from "../../src/models/User";
import { BaseError } from "../../src/error/BaseError";

describe("UserBusiness test", () => {
  const userBusiness = new UserBusiness(
    new UserDataBaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Succeded Login", async () => {
    const input: ILoginInputDTO = {
      email: "mari@gmail.com",
      password: "bananinha",
    };

    const response = await userBusiness.login(input);

    expect(response.message).toBe("User logged successfully");
    expect(response.token).toBe("token-mock-admin");
  });

  test("Ivalid Credentials", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "marigmail.com",
        password: "maluzera",
      };

      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Invalid Credentials. Be aware that e-mail must have @ and the password must have up to 6 caracteres."
        );
      }
    }
  });

  test("Incorrect password", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "mari@gmail.com",
        password: "password-incorrect",
      };

      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe(
          "Incorrect password. Verify the data you provided"
        );
      }
    }
  });

  test("Email No Exists", async () => {
    expect.assertions(2);

    try {
      const input: ILoginInputDTO = {
        email: "mariana@gmail.com",
        password: "maluzera",
      };

      await userBusiness.login(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe("There is no user with this email.");
      }
    }
  });
});
