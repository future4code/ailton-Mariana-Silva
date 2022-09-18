import { BaseError } from "./BaseError";

export class EmailExists extends BaseError{
    constructor(){
        super("Email Already Exists", 401)
    }
}