import express, { application } from "express";
import { AddressInfo } from "net";
import cors from "cors";
import { Tasks, listTasks } from "./data";
import fs from 'fs';

const example1 = () => {
  try {
    const content = JSON.stringify(listTasks)
    fs.writeFileSync('./test.txt', content);
  } catch (err) {
    console.log(err);
  }
}
example1();

const app = express();
app.use(express.json());
app.use(cors());

//Exercicio 1
app.get("/ping", (req, res) => {
  res.send("Pong!🏓");
});

//Exercicio4
app.get("/tasksCompleted/:completed", (req, res) => {
  const completed: boolean = req.params.completed === "true" ? true : false;
  const tasksCompleted: Tasks[] = listTasks.filter((item) => {
    if (item.completed === completed) {
      return item;
    }
  });
  res.send(tasksCompleted);
});

//Exercicio5
app.post("/createTask", (req, res) => {
  const newTask: Tasks = req.body;

  listTasks.push(newTask);
  res.send(listTasks);
});

//Exercicio6
app.put("/editTasks/:id", (req, res) => {
  const id = Number(req.params.id);
  const newTask = req.body;

  const result = listTasks.filter((item) => {
    if (item.id === id) {
      item.completed = newTask.completed;
    }
    return item;
  });
  res.send(result);
});
//Exercicio7
app.delete("/deleteTask/:id", (req, res) => {
  const id = Number(req.params.id);

  const newArrayToDo = listTasks.filter((item) => {
    return id !== item.id;
  });
  res.send(newArrayToDo);
});

//Exercicio8
app.get("/allTasksUser/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const userAllTasks = listTasks.filter((item) => {
    return userId === item.userId;
  });
  res.send(userAllTasks);
});

//Exercicio9 - Documentação

//Exercicio10
app.get("/allTasksFormatted/:userId", (req, res) => {
  const userId = Number(req.params.userId);
  const userAllTasks = listTasks.filter((item) => {
    if (userId === item.userId) {
      return item;
    }
  });
  const others = listTasks.filter((item) => {
    if (userId !== item.userId) {
      return item;
    }
  });
  res.send({ listTasks: { selectedUser: userAllTasks, others: others } });
});

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost:${address.port}`);
  } else {
    console.error("Failure upon starting server.");
  }
});
