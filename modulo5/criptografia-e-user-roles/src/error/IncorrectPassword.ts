import { BaseError } from "./BaseError";

export class InvalidCredencial extends BaseError{
    constructor(){
        super("Incorrect Credencials", 401)
    }
}