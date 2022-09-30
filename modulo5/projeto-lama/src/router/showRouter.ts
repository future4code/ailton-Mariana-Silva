import { Router } from "express";
import { ShowBusiness } from "../business/ShowBusiness";
import { ShowController } from "../controller/ShowController";
import { ShowDataBase } from "../dataBase/ShowDatabase";
import { Authenticator } from "../services/Authenticator";
import { IdGenerator } from "../services/IdGenerator";

export const showRouter = Router();

const showController = new ShowController(
    new ShowBusiness(
        new ShowDataBase(),
        new IdGenerator(),
        new Authenticator()
    )
);

showRouter.post("/", showController.createShow);
showRouter.get("/", showController.getShows);
showRouter.post("/tickets/:id", showController.buyTicket);
showRouter.delete("/tickets/:id", showController.deleteTicket);
