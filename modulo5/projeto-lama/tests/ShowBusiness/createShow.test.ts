import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IShowInputDTO } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { ShowDataBaseMock } from "../mocks/ShowDataBaseMock";

describe("ShowBusiness test", () => {
  const showBusiness = new ShowBusiness(
    new ShowDataBaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Succeded Create Show", async () => {
    const input: IShowInputDTO = {
      token: "token-mock-admin",
      band: "Linking Park",
      startsAt: new Date("2022/12/07"),
    };

    const response = await showBusiness.createShow(input);

    expect(response.message).toBe("Show created successfully");
    expect(response.show.getBand()).toBe("Linking Park");
  });

  test("Authorization Error", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDTO = {
        token: "token-mock-invalid",
        band: "Linking Park",
        startsAt: new Date("2022/12/07"),
      };

      await showBusiness.createShow(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Insufficient permission");
      }
    }
  });

  test("Show Already Exists", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDTO = {
        token: "token-mock-admin",
        band: "Linking Park",
        startsAt: new Date("2022/12/05"),
      };

      await showBusiness.createShow(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe("Show Already Exists on this day");
      }
    }
  });
  test("Missing Fields", async () => {
    expect.assertions(2);

    try {
      const input: IShowInputDTO = {
        token: "token-mock-invalid",
        band: "",
        startsAt: new Date("2022/12/07"),
      };

      await showBusiness.createShow(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(400);
        expect(error.message).toBe(
          "Missing fields to complet. Inform token, band name and date at show. Be aware that date  can't be earlier than 12/05/2022"
        );
      }
    }
  });
});
