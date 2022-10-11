import { Request, Response } from "express"
import { PingBusiness } from "../business/PingBusiness"
import { BaseError } from "../errors/BaseError"

export class PingController {
    constructor(
        private pingBusiness: PingBusiness
    ) {}

    public ping = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const response = await this.pingBusiness.ping()
            
            res.status(200).send(response)
        } catch (error) {
            console.log(error)
            if (error instanceof BaseError) {
                return res.status(error.statusCode).send({ message: error.message })
            }
            res.status(500).send({ message: "Erro inesperado" })
        }
    }
}