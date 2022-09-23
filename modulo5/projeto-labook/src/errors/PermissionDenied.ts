import { BaseError } from "./BaseError";

export class PermissionDenied extends BaseError {
  constructor(
    message: string = "Your user does not have permission for this access or your logged time has expired"
  ) {
    super(401, message);
  }
}
