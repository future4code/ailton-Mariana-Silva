import { BaseError } from "./BaseError";

export class EmailExists extends BaseError {
  constructor() {
    super("Email already exists. Verify the email you provided", 401);
  }
}
