import { UserBusiness } from "../../src/business/UserBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { HashManagerMock } from "../mocks/services/HashManagerMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { UserDataBaseMock } from "../mocks/UserDataBaseMock";
import { ISignupInputDTO } from "../../src/models/User";
import { BaseError } from "../../src/error/BaseError";

describe("UserBusiness test", () => {
  const userBusiness = new UserBusiness(
    new UserDataBaseMock(),
    new IdGeneratorMock(),
    new HashManagerMock(),
    new AuthenticatorMock()
  );

  test("Succeded Signup", async () => {
    const input: ISignupInputDTO = {
      name: "Maria Luiza",
      email: "malu@gmail.com",
      password: "maluzera",
    };

    const response = await userBusiness.signup(input);

    expect(response.message).toBe("User created successfully");
    expect(response.token).toBe("token-mock-normal");
  });

  test("Ivalid Credentials", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        name: "Maria Luiza",
        email: "malu@gmail.com",
        password: "malu",
      };

      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Invalid Credentials. Be aware that e-mail must have @ and the password must have up to 6 caracteres."
        );
      }
    }
  });
  test("Email Exists", async () => {
    expect.assertions(2);

    try {
      const input: ISignupInputDTO = {
        name: "Mari Andrade",
        email: "mari@gmail.com",
        password: "maluzera",
      };

      await userBusiness.signup(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe(
          "Email already exists. Verify the email you provided"
        );
      }
    }
  });
});
