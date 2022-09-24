import { Request, Response } from "express"
import { PingBusiness } from "../business/PingBusiness"

export class PingController {
    public ping = async (req: Request, res: Response) => {
        let errorCode = 400
        try {
            const pingBusiness = new PingBusiness()
            const response = await pingBusiness.ping()
            
            res.status(200).send(response)
        } catch (error) {
            res.status(errorCode).send({ message: error.message })
        }
    }
}