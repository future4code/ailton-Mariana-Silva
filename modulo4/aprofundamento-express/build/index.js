"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const fs_1 = __importDefault(require("fs"));
const example1 = () => {
    try {
        const content = JSON.stringify(data_1.listTasks);
        fs_1.default.writeFileSync('./test.txt', content);
    }
    catch (err) {
        console.log(err);
    }
};
example1();
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
//Exercicio 1
app.get("/ping", (req, res) => {
    res.send("Pong!🏓");
});
//Exercicio4
app.get("/tasksCompleted/:completed", (req, res) => {
    const completed = req.params.completed === "true" ? true : false;
    const tasksCompleted = data_1.listTasks.filter((item) => {
        if (item.completed === completed) {
            return item;
        }
    });
    res.send(tasksCompleted);
});
//Exercicio5
app.post("/createTask", (req, res) => {
    const newTask = req.body;
    data_1.listTasks.push(newTask);
    res.send(data_1.listTasks);
});
//Exercicio6
app.put("/editTasks/:id", (req, res) => {
    const id = Number(req.params.id);
    const newTask = req.body;
    const result = data_1.listTasks.filter((item) => {
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
    const newArrayToDo = data_1.listTasks.filter((item) => {
        return id !== item.id;
    });
    res.send(newArrayToDo);
});
//Exercicio8
app.get("/allTasksUser/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    const userAllTasks = data_1.listTasks.filter((item) => {
        return userId === item.userId;
    });
    res.send(userAllTasks);
});
//Exercicio9 - Documentação
//Exercicio10
app.get("/allTasksFormatted/:userId", (req, res) => {
    const userId = Number(req.params.userId);
    const userAllTasks = data_1.listTasks.filter((item) => {
        if (userId === item.userId) {
            return item;
        }
    });
    const others = data_1.listTasks.filter((item) => {
        if (userId !== item.userId) {
            return item;
        }
    });
    res.send({ listTasks: { selectedUser: userAllTasks, others: others } });
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost:${address.port}`);
    }
    else {
        console.error("Failure upon starting server.");
    }
});
