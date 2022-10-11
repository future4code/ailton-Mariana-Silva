import { BaseError } from "./BaseError";

export class ShowNotFound extends BaseError {
  constructor() {
    super("Show not found", 404);
  }
}

export class TicketNoAvailable extends BaseError {
  constructor() {
    super("There are no tickets available", 422);
  }
}
