import { app } from "./app";
import { userRouter } from "./router/userRouter";
import { postRouter } from "./router/postRouter";

app.use("/users", userRouter);
app.use("/posts", postRouter);
