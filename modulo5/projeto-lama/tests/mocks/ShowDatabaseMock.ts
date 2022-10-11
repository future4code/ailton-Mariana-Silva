import { DataBase } from "../../src/dataBase/DataBase";
import {
  IBookATicketInputDTO,
  IDeleteTicketDBDTO,
  IGetShowsDBDTO,
  IPurchaseDBDTO,
  IShowDB,
  Show,
} from "../../src/models/Show";

export class ShowDataBaseMock extends DataBase {
  public static TABLE_SHOWS = "Lama_Shows";
  public static TABLE_TICKETS = "Lama_Tickets";

  verifyDate = async (starts_at: Date) => {
    switch (starts_at.getDate()) {
      case 5:
        const show: IShowDB = {
          id: "201",
          band: "Foo Fighters",
          starts_at: new Date("2022/12/05"),
          tickets: 5000,
        };

        return show;

      default:
        return null;
    }
  };

  verifyTicket = async (user_id: string, show_id: string) => {
    switch (user_id && show_id) {
      case "id-mock" && "201":
        const show: IDeleteTicketDBDTO = {
          show_id: "201",
          user_id: "id-mock",
        };
        return show;

      default:
        return undefined;
    }
  };

  getShowById = async (show_id: string) => {
    switch (show_id) {
      case "201":
        const show201: IShowDB = {
          id: "201",
          band: "Foo Fighters",
          starts_at: new Date("2022/12/05"),
          tickets: 5000,
        };

        return show201;

      case "202":
        const show202: IShowDB = {
          id: "202",
          band: "System of a Down",
          starts_at: new Date("2022/12/06"),
          tickets: 5000,
        };

        return show202;

      case "c390d092-9a00-4b3c-87e1-ab4fc0238b68":
        const showLinkPark: IShowDB = {
          id: "c390d092-9a00-4b3c-87e1-ab4fc0238b68",
          band: "Link Park",
          starts_at: new Date("2022/12/08"),
          tickets: 0,
        };

        return showLinkPark;

      default:
        return undefined;
    }
  };

  createShow = async (show: Show) => {};

  getShows = async (input: IGetShowsDBDTO) => {
    const shows: IShowDB[] = [
      {
        id: "201",
        band: "Foo Fighters",
        starts_at: new Date("2022/12/05"),
        tickets: 5000,
      },
      {
        id: "202",
        band: "System of a Down",
        starts_at: new Date("2022/12/06"),
        tickets: 5000,
      },
    ];

    return shows;
  };

  bookATicket = async (purchase: IPurchaseDBDTO) => {};

  deleteTicket = async (purchase: IDeleteTicketDBDTO) => {};

  putTickets = async (show_id: any, tickets: any) => {};
}
