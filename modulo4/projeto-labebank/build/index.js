"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.get("/test", (req, res) => {
    res.send({
        message: "API funcionando!",
    });
});
app.post("/users", (req, res) => {
    try {
        const { name, cpf, birthDate } = req.body;
        if (!name || !cpf || !birthDate) {
            res.statusCode = 400;
            throw new Error("Error: Name, CPF snd Birth date, not identified, please check the fields ");
        }
        const newUser = {
            name: name,
            cpf: cpf,
            birthDate: birthDate,
            balance: 0,
            statement: [],
        };
        data_1.users.push(newUser);
        res.status(200).send({ message: "User created successfully!" });
    }
    catch (error) {
        res.status(500).send({ message: error.message });
    }
});
app.get("/users", (req, res) => {
    try {
        res.status(200).send({ users: data_1.users });
    }
    catch (error) {
        res.status(422).send(error.message);
    }
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.");
});
//# sourceMappingURL=index.js.map