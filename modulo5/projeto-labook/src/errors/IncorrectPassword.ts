import { BaseError } from "./BaseError";

export class IncorrectPassword extends BaseError {
  constructor(
    message: string = "Incorrect password. Verify the data you provided"
  ) {
    super(401, message);
  }
}
