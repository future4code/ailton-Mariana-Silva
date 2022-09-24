import { BaseError } from "./BaseError";

export class PostAlreadyLiked extends BaseError {
  constructor(message: string = "Post already liked") {
    super(401, message);
  }
}

export class PostDidntLiked extends BaseError {
    constructor(message: string = "Post already liked") {
      super(401, message);
    }
  }
