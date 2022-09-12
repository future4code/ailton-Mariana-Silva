import { app } from "./app";
import connectionTest from "./endpoints/connectionTest";
import { postUsers } from "./endpoints/postUser";
import { getAllUsers } from "./endpoints/getAllUsers";
import { postProduct } from "./endpoints/postProduct";
import { getAllProducts } from "./endpoints/getAllProducts";
import { postPurchase } from "./endpoints/postPurchases";
import { getAllPurchasesByUser } from "./endpoints/getAllPurchaseByUser";

//Test
app.get("/connectionTest", connectionTest);

//Get
app.get("/users", getAllUsers);
app.get("/products", getAllProducts);
app.get("/users/:user_id/purchases", getAllPurchasesByUser);

//Post
app.post("/users", postUsers);
app.post("/products", postProduct);
app.post("/purchases", postPurchase);
