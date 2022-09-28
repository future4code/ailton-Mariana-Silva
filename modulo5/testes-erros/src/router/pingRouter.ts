import { Router } from 'express'
import { PingBusiness } from '../business/PingBusiness'
import { PingController } from '../controller/PingController'

export const pingRouter = Router()

const pingController = new PingController(
    new PingBusiness()
)

pingRouter.get("/", pingController.ping)