import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IBuyTicketInputDTO, IShowInputDTO } from "../../src/models/Show";
import { AuthenticatorMock } from "../mocks/services/AuthenticatorMock";
import { IdGeneratorMock } from "../mocks/services/IdGeneratorMock";
import { ShowDataBaseMock } from "../mocks/ShowDataBaseMock";

describe("ShowBusiness test", () => {
  const showBusiness = new ShowBusiness(
    new ShowDataBaseMock(),
    new IdGeneratorMock(),
    new AuthenticatorMock()
  );

  test("Succeded by Ticket", async () => {
    const input: IBuyTicketInputDTO = {
      token: "token-mock-admin",
      showId: "202",
    };

    const response = await showBusiness.buyTicket(input);

    expect(response.message).toBe("Ticket bought successfully");
  });
});
