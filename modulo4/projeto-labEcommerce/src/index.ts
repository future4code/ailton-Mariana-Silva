import {app} from "./app";
import connectionTest from "./endpoints/connectionTest";
import { postUsers } from "./endpoints/postUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProduct } from "./endpoints/postProduct";
import { getAllProducts } from "./endpoints/getAllProducts";

app.get("/connectionTest", connectionTest);
app.post("/users", postUsers);
app.get("/users", getAllUsers);
app.post("/products", postProduct);
app.get("/products", getAllProducts);
