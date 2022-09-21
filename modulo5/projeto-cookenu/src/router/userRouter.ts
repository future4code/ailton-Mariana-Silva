import { Router } from 'express'
import { UserController } from '../controller/UserController'

export const userRouter = Router()

export const userController = new UserController();

userRouter.post("/signup", userController.signup);
userRouter.post("/login", userController.login);
userRouter.get("/feed", userController.getFeed);
userRouter.get("/profile", userController.getProfile);
userRouter.get("/:user_id", userController.getById);
userRouter.post("/follow", userController.postFollow);
userRouter.delete("/unfollow", userController.deleteFollow);
// userRouter.delete("/user/delete/:user_id", userController.deleteAccount);