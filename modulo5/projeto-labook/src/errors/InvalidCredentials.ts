import { BaseError } from "./BaseError";

export class InvalidCredentials extends BaseError {
  constructor(
    message: string = "Invalid credentials. Please be aware that the email must be in format 'email@email.com', the name must be at least 3 characters and the password must be at least 6 characters."
  ) {
    super(401, message);
  }
}

export class InvalidPost extends BaseError {
  constructor(message: string = "The post contente must have at least one charactere") {
    super(401, message);
  }
}
