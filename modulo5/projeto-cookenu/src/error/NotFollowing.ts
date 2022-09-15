import { BaseError } from "./BaseError";

export class NotFollowing extends BaseError {
  constructor() {
    super("User is not following this profile.", 401);
  }
}
