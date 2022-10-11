import { Request, Response } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { BaseError } from "../error/BaseError";
import {
  IBookATicketInputDTO,
  IGetShowsInputDTO,
  IShowInputDTO,
} from "../models/Show";

export class ShowController {
  constructor(private showBusiness: ShowBusiness) {}

  createShow = async (req: Request, res: Response) => {
    try {
      const input: IShowInputDTO = {
        token: req.headers.authorization!,
        band: req.body.band,
        startsAt: new Date(req.body.startsAt!),
      };

      const response = await this.showBusiness.createShow(input);

      res.status(200).send(response);
    } catch (error: any) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res
        .status(500)
        .send({ message: "Unexpected error occurred during create show" });
    }
  };

  getShows = async (req: Request, res: Response) => {
    try {
      const input: IGetShowsInputDTO = {
        token: req.headers.authorization!,
        search: req.body.search!,
        order: req.body.order!,
        sort: req.body.sort!,
        limit: req.body.limit!,
        page: req.body.page!,
      };

      const response = await this.showBusiness.getShows(input);

      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res
        .status(500)
        .send({ message: "Unexpected error occurred during get shows" });
    }
  };
  bookATicket = async (req: Request, res: Response) => {
    try {
      const input: IBookATicketInputDTO = {
        token: req.headers.authorization!,
        showId: req.params.id,
      };

      const response = await this.showBusiness.bookATicket(input);

      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res
        .status(500)
        .send({ message: "Unexpected error occurred during book a ticket" });
    }
  };

  deleteTicket = async (req: Request, res: Response) => {
    try {
      const input: IBookATicketInputDTO = {
        token: req.headers.authorization!,
        showId: req.params.id as string,
      };

      const response = await this.showBusiness.deleteTicket(input);

      res.status(200).send(response);
    } catch (error: unknown) {
      if (error instanceof BaseError) {
        return res.status(error.statusCode).send({ message: error.message });
      }
      res
        .status(500)
        .send({ message: "Unexpected error occurred during delete ticket" });
    }
  };
}
