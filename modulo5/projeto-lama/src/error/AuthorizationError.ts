import { BaseError } from "./BaseError";

export class AuthorizationError extends BaseError {
  constructor() {
    super("Insufficient permission", 403);
  }
}
