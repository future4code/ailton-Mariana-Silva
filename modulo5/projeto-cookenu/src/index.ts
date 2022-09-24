import { app } from "./controller/app";
import { userRouter } from "./router/userRouter";
import { recipeRouter } from "./router/recipeRouter";

app.use("/user", userRouter);
app.use("/recipe", recipeRouter);
