import { BaseError } from "./BaseError";

export class ExpiredToken extends BaseError {
  constructor() {
    super("You logged time has expired", 401);
  }
}