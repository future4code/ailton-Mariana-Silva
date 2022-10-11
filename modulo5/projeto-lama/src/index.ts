import { app } from "./app";
import { userRouter } from "./router/userRouter";
import { showRouter } from "./router/showRouter";

app.use("/users", userRouter);
app.use("/shows", showRouter);
