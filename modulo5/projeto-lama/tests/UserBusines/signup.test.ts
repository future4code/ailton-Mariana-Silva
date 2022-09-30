import { UserBusiness } from "../../src/business/UserBusiness";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { HashManagerMock } from "../mocks/services/HashManagerMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { UserDatabaseMock } from "../mocks/UserDatabaseMock";
import { ISignupInputDTO } from "../../src/models/User";
import { BaseError } from "../../src/error/BaseError";

describe("UserBusiness test", () => {
  const userBusiness = new UserBusiness(
    new UserDatabaseMock(),
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
});
