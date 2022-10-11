import { BaseError } from "./BaseError";

export class IncorrectPassword extends BaseError {
  constructor() {
    super("Incorrect password. Verify the data you provided", 401);
  }
}
