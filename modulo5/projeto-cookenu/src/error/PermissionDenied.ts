import { BaseError } from "./BaseError";

export class PermissionDenied extends BaseError {
  constructor() {
    super(
      "Your user does not have permission for this access or your logged time has expired",
      401
    );
  }
}
