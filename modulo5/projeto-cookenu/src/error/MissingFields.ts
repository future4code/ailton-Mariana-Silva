import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
  constructor() {
    super("Missing fields to complet.", 400);
  }
}
