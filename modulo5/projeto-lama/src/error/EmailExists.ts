import { BaseError } from "./BaseError";

export class EmailExists extends BaseError {
  constructor() {
    super("Email already exists. Verify the email you provided", 401);
  }
}

export class EmailNoExists extends BaseError {
  constructor() {
    super("There is no user with this email.", 400);
  }
}
