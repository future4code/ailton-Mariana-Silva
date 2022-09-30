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

  test("Succeded Deleted Ticket", async () => {
    const input: IBuyTicketInputDTO = {
        token: "token-mock-admin",
        showId: "201",
      };
  
      const response = await showBusiness.deleteTicket(input);
  
      expect(response.message).toBe("Ticket deleted successfully");
    });
  });