import { BaseError } from "./BaseError";

export class PostNotFound extends BaseError {
  constructor(message: string = "Post not found") {
    super(401, message);
  }
}
