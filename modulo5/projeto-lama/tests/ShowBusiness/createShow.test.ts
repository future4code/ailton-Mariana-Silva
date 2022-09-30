import { ShowBusiness } from "../../src/business/ShowBusiness";
import { BaseError } from "../../src/error/BaseError";
import { IShowInputDTO } from "../../src/models/Show";
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

//   test("Missing Fields", async () => {
//     expect.assertions(2)

//     try {
//         const input: IShowInputDTO = {
//             token: "invalid-token",
//             band: "Linking Park",
//             startsAt: new Date("2022/12/07"),
//         }

//         await showBusiness.createShow(input)

//     } catch (error) {
//         if(error instanceof BaseError) {
//             expect(error.statusCode).toBe(400)
//             expect(error.message).toBe("Missing fields to complet.")
//         }
//     }
// })

// test("Missing Fields", async () => {
//     expect.assertions(2)

//     try {
//         const input: IShowInputDTO = {
//             token: "token-mock",
//             band: "Linking Park",
//             startsAt: new Date("2022/12/07"),
//         }

//         await showBusiness.createShow(input)

//     } catch (error) {
//         if(error instanceof BaseError) {
//             expect(error.statusCode).toBe(400)
//             expect(error.message).toBe("Missing fields to complet.")
//         }
//     }
// })
});
