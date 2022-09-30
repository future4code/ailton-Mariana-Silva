import { ShowDataBase } from "../dataBase/ShowDataBase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";
import { MissingFields } from "../error/MissingFields";
import { PermissionDenied } from "../error/PermissionDenied";
import { AuthorizationError } from "../error/AuthorizationError";
import { ShowNotFound, TicketNoAvailable } from "../error/NotFoundError";
import { TicketNotPurchased, TicketPurchased } from "../error/ConflictError";
import {
  IBuyTicketInputDTO,
  IDeleteTicketDBDTO,
  IGetShowsDBDTO,
  IGetShowsInputDTO,
  IPurchaseDBDTO,
  IShowInputDTO,
  ITicketDB,
  Show,
} from "../models/Show";

export class ShowBusiness {
  constructor(
    private showDataBase: ShowDataBase,
    private idGenerator: IdGenerator,
    private authenticator: Authenticator
  ) {}

  createShow = async (input: IShowInputDTO) => {
    const { token, band, startsAt } = input;

    if (!token || !band || !startsAt) {
      throw new MissingFields();
    }
    if (startsAt < new Date("2022/12/05")) {
      throw new PermissionDenied();
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const isUserAdmin = payload.role === "ADMIN";
    if (!isUserAdmin) {
      throw new AuthorizationError();
    }

    const starts_at = new Date(startsAt);

    const id = this.idGenerator.generate();
    const show = new Show(id, band, starts_at);

    await this.showDataBase.createShow(show);

    const response = {
      message: "Show created successfully",
      show,
    };

    return response;
  };

  getShows = async (input: IGetShowsInputDTO) => {
    const token = input.token;
    const search = input.search || "";
    const order = input.order || "ASC";
    const sort = input.sort || "starts_at";
    const limit = Number(input.limit) || 10;
    const page = Number(input.page) || 1;
    const offset = (page - 1) * limit;

    if (!token) {
      throw new PermissionDenied();
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const getShowsInputDB: IGetShowsDBDTO = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const showsDB = await this.showDataBase.getShows(getShowsInputDB);

    const shows = showsDB.map((show) => {
      return {
        id: show.id,
        band: show.band,
        startsAt: show.starts_at,
        tickets: show.tickets,
      };
    });

    const response = {
      shows,
    };

    return response;
  };

  buyTicket = async (input: IBuyTicketInputDTO) => {
    const { token, showId } = input;

    if (!token || !showId) {
      throw new PermissionDenied();
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const existShow = await this.showDataBase.getShowById(showId);

    if (!existShow) {
      throw new ShowNotFound();
    }

    const isAlreadyBought = await this.showDataBase.verifyTicket(
      payload.id,
      showId
    );

    if (isAlreadyBought) {
      throw new TicketPurchased();
    }

    const show = new Show(
      existShow.id,
      existShow.band,
      existShow.starts_at,
      existShow.tickets
    );

    if (show.getTickets() === 0) {
      throw new TicketNoAvailable();
    }
    const result = await this.showDataBase.putTickets(
      show.getId(),
      show.getTickets() - 1
    );

    const id = this.idGenerator.generate();

    const newTicket: IPurchaseDBDTO = {
      purchase_id: id,
      show_id: showId,
      user_id: payload.id,
    };

    await this.showDataBase.buyTicket(newTicket);

    return {
      message: "Ticket bought successfully",
      ticketnumber: id,
      ticketsAvailable: show.getTickets(),
      result,
    };
  };

  deleteTicket = async (input: IBuyTicketInputDTO) => {
    const { token, showId } = input;

    if (!token || !showId) {
      throw new PermissionDenied();
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const existShow = await this.showDataBase.getShowById(showId);

    if (!existShow) {
      throw new ShowNotFound();
    }

    const isAlreadyBought = await this.showDataBase.verifyTicket(
      payload.id,
      showId
    );

    if (!isAlreadyBought) {
      throw new TicketNotPurchased();
    }
    const isUserAdmin = payload.role === "ADMIN";
    const isUserOwner = payload.id === isAlreadyBought.user_id;

    if (!isUserAdmin && !isUserOwner) {
      throw new PermissionDenied();
    }

    const deleteTicket: IDeleteTicketDBDTO = {
      user_id: payload.id,
      show_id: showId,
    };

    await this.showDataBase.deleteTicket(deleteTicket);

    const response = {
      message: "Ticket deleted successfully",
    };

    return response;
  };
}
