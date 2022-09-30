import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IGetShowsInputDTO, IShowInputDTO, Show } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { HashManagerMock } from "../mocks/services/HashManagerMock";
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
});
