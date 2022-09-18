import { BaseError } from "./BaseError";

export class PermissionDenied extends BaseError {
  constructor() {
    super(
      "Your user doesn't have permission for this access", 401
    );
  }
}