import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import connectionTest from "./endpoints/connectionTest";
import createUser from "./endpoints/createUser";
import userById from "./endpoints/userById";
import userEditById from "./endpoints/userEditById";
import createTask from "./endpoints/createTask";
import taskById from "./endpoints/taskById";
import allUser from "./endpoints/allUser";
import taskByCreator from "./endpoints/taskByCreator";
import userByName from "./endpoints/userByName";
import taskResponsible from "./endpoints/taskResponsible";

const app: Express = express();
app.use(express.json());
app.use(cors());

//EndpointTest
app.get("/connectionTest", connectionTest);
//Endpoint 1
app.post("/user", createUser);
//Endpoint 2
app.get("/user/:id", userById);
//Endpoint 3
app.put("/user/edit/:id", userEditById);
//Endpoint 4
app.post("/task", createTask);
//Endpoint 5
app.get("/task/:id", taskById);
//Endpoint 6
app.get("/user/all", allUser);
//Endpoint 7
app.get("/task", taskByCreator);
//Endpoint 8
app.get("/user", userByName);
//Endpoint 9
app.post("/task/responsible", taskResponsible)

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
