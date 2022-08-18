"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/users", (req, res) => {
    let errorCode = 400;
    try {
        const type = req.query.type;
        const name = req.query.name;
        if (type) {
            if (type.toUpperCase() !== data_1.ROLES.ADMIN &&
                type.toUpperCase() !== data_1.ROLES.NORMAL) {
                res.status(422);
                throw new Error("Invalid value for 'type'. Valid values: 'NORMAL', 'ADMIN'.");
            }
            const usuariosFiltrados = data_1.users.filter((user) => {
                return user.type === type;
            });
            res.status(200).send(usuariosFiltrados);
        }
        if (name) {
            if (typeof name !== "string") {
                res.status(422);
                throw new Error("Invalid value for 'name'. Value must be a string.");
            }
            if (name === "") {
                res.status(422);
                throw new Error("Invalid value for 'name'. Please enter a valid non-empty string.");
            }
            const search = data_1.users.filter((user) => {
                return user.name.toLowerCase().includes(name);
            });
            res.status(200).send(search);
        }
        res.status(200).send(data_1.users);
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
app.post("/users", (req, res) => {
    let errorCode = 400;
    try {
        const { name, email, type, age } = req.body;
        const id = Date.now();
        const user = { id, name, email, type, age };
        if (typeof type !== "string") {
            res.status(422);
            throw new Error("Invalid value for 'type'. Value must be of type string.");
        }
        if (typeof name !== "string") {
            res.status(422);
            throw new Error("Invalid value for 'name'. Value must be of type string.");
        }
        if (!name || !email || !type || !age) {
            res.status(400);
            throw new Error("Please verify that all the fields be filled up.");
        }
        if (typeof email !== "string") {
            res.status(422);
            throw new Error("Invalid value for 'email'. Value must be of type string.");
        }
        if (typeof age !== "number") {
            res.status(422);
            throw new Error("Invalid value for 'age'. Value must be of type number.");
        }
        data_1.users.push(user);
        res.status(201).send("User successfully created");
    }
    catch (error) {
        res.status(errorCode).send({ message: error.message });
    }
});
app.put("/users/name/", (req, res) => {
    try {
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("There's no userlist");
        }
        data_1.users[data_1.users.length - 1].name =
            data_1.users[data_1.users.length - 1].name + " - ALTERADO";
        res.status(200).send(data_1.users[data_1.users.length - 1]);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.patch("/users/name/", (req, res) => {
    try {
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("There's no userlist");
        }
        data_1.users[data_1.users.length - 1].name =
            data_1.users[data_1.users.length - 1].name + " - REALTERADO";
        res.status(200).send(data_1.users[data_1.users.length - 1]);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.delete("/users/delete/:id", (req, res) => {
    const id = Number(req.params.id);
    try {
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("There's no userlist");
        }
        if (isNaN(id)) {
            res.statusCode = 422;
            throw new Error("Invalid parameter");
        }
        if (data_1.users.filter((item) => {
            return item.id === id;
        }).length === 0) {
            res.statusCode = 404;
            throw new Error("User not found");
        }
        const userDeleted = data_1.users.filter((item) => {
            return item.id !== id;
        });
        res
            .status(200)
            .send({ message: "User deleted successfully", data: userDeleted });
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Serverg is running in http://localhost:${address.port}`);
    }
    else {
        console.log(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map