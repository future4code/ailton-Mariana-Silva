import { BaseError } from "./BaseError";

export class EmailAlreadyExists extends BaseError {
  constructor(
    message: string = "Email already exists. Verify the email you provided"
  ) {
    super(401, message);
  }
}
  export class EmailNoExists extends BaseError {
    constructor(
      message: string = "There is no user with this email."
    ) {
      super(400, message);
    }
  }
