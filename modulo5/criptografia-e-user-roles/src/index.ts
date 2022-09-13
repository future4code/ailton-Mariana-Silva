import { app } from "./app";
import { connectionTest } from "./endpoints/connectionTest";
import { UserEndpoint } from "./endpoints/createUser";

const user = new UserEndpoint();
//Test
app.get("/connectionTest", connectionTest);

app.get("/user/login", user.login);
app.get("/user/byId", user.getUserById);
app.get("/user/byToken", user.getUserByToken);
app.post("/user/signup", user.createUser);
app.delete("/user/deleteById", user.deleleteUserById);