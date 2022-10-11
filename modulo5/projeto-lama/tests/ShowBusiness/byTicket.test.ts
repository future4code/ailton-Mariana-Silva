import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IBookATicketInputDTO, IShowInputDTO } from "../../src/models/Show";
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
    const input: IBookATicketInputDTO = {
      token: "token-mock-admin",
      showId: "202",
    };

    const response = await showBusiness.bookATicket(input);

    expect(response.message).toBe("Ticket bought successfully");
  });

  test("Permission Denied", async () => {
    expect.assertions(2);

    try {
      const input: IBookATicketInputDTO = {
        token: "",
        showId: "201",
      };

      await showBusiness.bookATicket(input);
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
      const input: IBookATicketInputDTO = {
        token: "token-mock-invalid",
        showId: "201",
      };

      await showBusiness.bookATicket(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(403);
        expect(error.message).toBe("Insufficient permission");
      }
    }
  });

  test("Show not found", async () => {
    expect.assertions(2);

    try {
      const input: IBookATicketInputDTO = {
        token: "token-mock-normal",
        showId: "204",
      };

      await showBusiness.deleteTicket(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(404);
        expect(error.message).toBe("Show not found");
      }
    }
  });

  test("Ticket Purchased", async () => {
    expect.assertions(2);

    try {
      const input: IBookATicketInputDTO = {
        token: "token-mock-normal",
        showId: "201",
      };

      await showBusiness.bookATicket(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(401);
        expect(error.message).toBe(
          "You already bought a ticket for this show. Only one ticket per show is allowed"
        );
      }
    }
  });

  test("Ticket No Available", async () => {
    expect.assertions(2);

    try {
      const input: IBookATicketInputDTO = {
        token: "token-mock-admin",
        showId: "c390d092-9a00-4b3c-87e1-ab4fc0238b68",
      };

      await showBusiness.bookATicket(input);
    } catch (error: any) {
      if (error instanceof BaseError) {
        expect(error.statusCode).toBe(422);
        expect(error.message).toBe("There are no tickets available");
      }
    }
  });
});
