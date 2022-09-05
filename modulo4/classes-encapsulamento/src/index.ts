import { app } from "./app";
import connectionTest from "./endpoints/connectionTest";

//Test
app.get("/connectionTest", connectionTest);