import { app } from "./app";
import connectionTest from "./endpoints/conectionTest";
import { getAllFunctions } from "./endpoints/getAllFunctions";
import { getAllUsers } from "./endpoints/getAllUsers";
import { getFiveUsers } from "./endpoints/getFiveUsers";
import { getUserbyName } from "./endpoints/getUserByName";
import { getUserbyType } from "./endpoints/getUserByType";
import { getUsersOrdered } from "./endpoints/getUsersOrdered"

app.get("/connectionTest", connectionTest);
app.get("/allUsers", getAllUsers);
app.get("/userByName", getUserbyName);
app.get("/userByType/:type", getUserbyType);
app.get("/usersOrdered", getUsersOrdered);
app.get("/fiveUsers", getFiveUsers);
app.get("/allFunctions", getAllFunctions);