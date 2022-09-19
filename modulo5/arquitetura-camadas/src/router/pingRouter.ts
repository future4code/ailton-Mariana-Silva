import { Router } from 'express'
import { PingController } from '../controller/PingController'

export const pingRouter = Router()

const pingController = new PingController()

pingRouter.get("/", pingController.ping)