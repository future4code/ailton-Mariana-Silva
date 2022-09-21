import { Router } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { UserController } from "../controller/UserController";
import { RecipeDataBase } from "../data/recipeDataBase";
import { UserDataBase } from "../data/userDataBase";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { GenerateId } from "../services/IdGenarator";

export const userRouter = Router();

export const userController = new UserController(
  new UserBusiness(
    new UserDataBase(),
    new RecipeDataBase(),
    new GenerateId(),
    new HashManager(),
    new Authenticator()
  )
);

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/feed", userController.getFeed);
userRouter.get("/profile", userController.getProfile);
userRouter.get("/:user_id", userController.getProfileById);
userRouter.post("/follow", userController.postFollow);
userRouter.delete("/unfollow", userController.deleteFollow);
userRouter.delete("/delete/:user_id", userController.deleteAccount);
