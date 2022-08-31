import {app} from "./app";
import { createAddress } from "./endpoints/createAddress";
import connectionTest from "./endpoints/connectionTest";

app.get("/connectionTest", connectionTest);
app.post("/create/:cep", createAddress);