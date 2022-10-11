import { BaseError } from "./BaseError";

export class InvalidCredentials extends BaseError {
  constructor() {
    super(
      "Invalid Credentials. Be aware that e-mail must have @ and the password must have up to 6 caracteres.",
      400
    );
  }
}
