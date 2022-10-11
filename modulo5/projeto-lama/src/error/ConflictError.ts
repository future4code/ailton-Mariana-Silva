import { BaseError } from "./BaseError";

export class TicketPurchased extends BaseError {
  constructor() {
    super(
      "You already bought a ticket for this show. Only one ticket per show is allowed",
      401
    );
  }
}

export class TicketNotPurchased extends BaseError {
  constructor() {
    super("You haven't bought a ticket for this show", 401);
  }
}

export class ShowAlreadyExist extends BaseError {
  constructor() {
    super("Show Already Exists on this day", 401);
  }
}
