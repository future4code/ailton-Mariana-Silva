import { BaseError } from "./BaseError";

export class IncorrectPassword extends BaseError {
  constructor() {
    super("Incorrect credentials. Verify the data you provided", 401);
  }
}
