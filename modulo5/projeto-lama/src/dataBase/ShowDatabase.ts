import { DataBase } from "./DataBase";
import {
  IDeleteTicketDBDTO,
  IGetShowsDBDTO,
  IPurchaseDBDTO,
  IShowDB,
  Show,
} from "../models/Show";

export class ShowDataBase extends DataBase {
  public static TABLE_SHOWS = "Lama_Shows";
  public static TABLE_TICKETS = "Lama_Tickets";

  verifyDate = async (starts_at: Date): Promise<IShowDB | any> => {
    const result = await DataBase.connection(ShowDataBase.TABLE_SHOWS)
      .select()
      .where({ starts_at });

    return result[0];
  };

  verifyTicket = async (user_id: string, show_id: string) => {
    const result = await DataBase.connection(ShowDataBase.TABLE_TICKETS)
      .select()
      .where({ user_id })
      .andWhere({ show_id });

    return result[0];
  };

  createShow = async (show: Show) => {
    const showDB: IShowDB = {
      id: show.getId(),
      band: show.getBand(),
      starts_at: show.getStartsAt(),
      tickets: show.getTickets(),
    };

    await DataBase.connection(ShowDataBase.TABLE_SHOWS).insert(showDB);
  };

  getShows = async (input: IGetShowsDBDTO) => {
    const { search, order, sort, limit, offset } = input;

    if (search) {
      const showsDB = await DataBase.connection(ShowDataBase.TABLE_SHOWS)
        .select("*")
        .where(`band`, "=", `'%${search}%'`)
        .orderBy(sort, order)
        .limit(limit)
        .offset(offset);

      return showsDB;
    } else {
      const showsDB: IShowDB[] = await DataBase.connection(
        ShowDataBase.TABLE_SHOWS
      )
        .select("*")
        .orderBy(sort, order)
        .limit(limit)
        .offset(offset);

      return showsDB;
    }
  };

  bookATicket = async (purchase: IPurchaseDBDTO) => {
    const purchaseDB = {
      id: purchase.purchase_id,
      show_id: purchase.show_id,
      user_id: purchase.user_id,
    };

    await DataBase.connection(ShowDataBase.TABLE_TICKETS).insert(purchaseDB);
  };

  getShowById = async (show_id: string): Promise<IShowDB | undefined> => {
    const result = await DataBase.connection(ShowDataBase.TABLE_SHOWS)
      .select()
      .where({ id: show_id });

    return result[0];
  };

  public putTickets = async (
    show_id: string,
    tickets: number
  ): Promise<any> => {
    const result = await DataBase.connection(ShowDataBase.TABLE_SHOWS)
      .update({ tickets })
      .where({ id: show_id });

    return "Updated Successfully";
  };

  deleteTicket = async (purchase: IDeleteTicketDBDTO) => {
    const deleteTicketDB = {
      user_id: purchase.user_id,
      show_id: purchase.show_id,
    };

    await DataBase.connection(ShowDataBase.TABLE_TICKETS)
      .where({
        user_id: deleteTicketDB.user_id,
        show_id: deleteTicketDB.show_id,
      })
      .delete();

    await DataBase.connection(ShowDataBase.TABLE_SHOWS)
      .where("id", "=", `${purchase.show_id}`)
      .increment("tickets", 1);
  };
}
