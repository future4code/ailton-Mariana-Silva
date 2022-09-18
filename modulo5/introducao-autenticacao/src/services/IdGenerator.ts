import { v4 } from "uuid"

export class GenerateId {

    createId(): string {
        return v4();
    }
}
