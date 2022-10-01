import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
  constructor() {
    super(
      "Missing fields to complet. Inform token, band name and date at show. Be aware that date  can't be earlier than 12/05/2022",
      400
    );
  }
}
