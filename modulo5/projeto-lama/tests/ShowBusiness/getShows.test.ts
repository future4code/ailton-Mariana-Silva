import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IGetShowsInputDTO, IShowInputDTO, Show } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { ShowDataBaseMock } from "../mocks/ShowDataBaseMock";

describe("ShowBusiness test", () => {
  const showBusiness = new ShowBusiness(
    new ShowDataBaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Succeded Get Shows", async () => {
    const input: IGetShowsInputDTO = {
      token: "token-mock-admin",
      search: "",
      order: "ASC",
      sort: "starts_at",
      limit: "10",
      page: "1",
    };

    const response = await showBusiness.getShows(input);

    expect(response.shows.length).toBe(2);
    expect(response.shows[0]).toBeInstanceOf(Object);
  });

  test("Permission Denied", async () => {
    expect.assertions(2);

    try {
      const input: IGetShowsInputDTO = {
        token: "",
        search: "",
        order: "ASC",
        sort: "starts_at",
        limit: "10",
        page: "1",
      };

      await showBusiness.getShows(input);
    } catch (error) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe(
          "Your user does not have permission for this access or your logged time has expired"
        );
      }
    }
  });

  test("Authorization Error", async () => {
    expect.assertions(2);

    try {
      const input: IGetShowsInputDTO = {
        token: "token-mock-invalid",
        search: "",
        order: "ASC",
        sort: "starts_at",
        limit: "10",
        page: "1",
      };

      await showBusiness.getShows(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Insufficient permission");
      }
    }
  });
});
