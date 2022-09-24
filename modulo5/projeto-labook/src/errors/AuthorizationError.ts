import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
  constructor(message: string = "Insufficient permission") {
    super(403, message);
  }
}
