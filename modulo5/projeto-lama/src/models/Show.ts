export interface IShowDB {
  id: string;
  band: string;
  starts_at: Date;
  tickets: number;
}

export interface ITicketDB {
  id: string;
  show_id: string;
  user_id: string;
}

export class Show {
  constructor(
    private id: string,
    private band: string,
    private startsAt: Date,
    private tickets: number = 5000
  ) {}

  public getId = () => {
    return this.id;
  };

  public getBand = () => {
    return this.band;
  };

  public getStartsAt = () => {
    return this.startsAt;
  };

  public getTickets = () => {
    return this.tickets;
  };
}
export interface IShowInputDTO {
  token: string;
  band: string;
  startsAt: Date;
}
export interface IGetShowsInputDTO {
  token: string;
  search: string;
  order: string;
  sort: string;
  page: string;
  limit: string;
}
export interface IGetShowsDBDTO {
  search: string;
  order: string;
  sort: string;
  limit: number;
  offset: number;
}
export interface IBookATicketInputDTO {
  token: string;
  showId: string;
}
export interface IPurchaseDBDTO {
  purchase_id: string;
  show_id: string;
  user_id: string;
}
export interface IDeleteTicketDBDTO {
  show_id: string;
  user_id: string;
}
