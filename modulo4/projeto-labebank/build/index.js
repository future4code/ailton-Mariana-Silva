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
            throw new Error("Error: Name, CPF and Birth date, not identified, please check the fields ");
        }
        const dateToTimeStamp = (data) => {
            const fullDate = data.split("/");
            const year = Number(fullDate[2]);
            const month = Number(fullDate[1]) - 1;
            const day = Number(fullDate[0]);
            return new Date(year, month, day).getTime();
        };
        let timestampToday = new Date().getTime();
        let age = timestampToday / 31536000000 - dateToTimeStamp(birthDate) / 31536000000;
        if (age < 18) {
            res.statusCode = 412;
            throw new Error("Error: User must be over 18 years old");
        }
        const findCpf = data_1.users.filter((item) => {
            return item.cpf.includes(cpf);
        }).length !== 0;
        if (findCpf) {
            res.statusCode = 422;
            throw new Error("Error: CPF already exists.");
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
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.get("/users", (req, res) => {
    try {
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("Error: Users List not found ");
        }
        res.status(200).send({ users: data_1.users });
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.get("/users/:cpf", (req, res) => {
    try {
        const { cpf } = req.params;
        if (!cpf) {
            res.statusCode = 422;
            throw new Error("Error: Check the CPF. Needs to be: 000.000.000-00");
        }
        const userExist = data_1.users.find((item) => {
            return item.cpf === cpf;
        });
        if (!userExist) {
            res.statusCode = 404;
            throw new Error("Error: Client with this CPF not found");
        }
        const exists = data_1.users.find((item) => {
            if (item.cpf === cpf) {
                return item.balance;
            }
        });
        res.status(200).send({ message: `Balance is: ${exists === null || exists === void 0 ? void 0 : exists.balance}` });
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.put("/users", (req, res) => {
    try {
        const { name, cpf, value, descriptionBillToPay } = req.body;
        const date = new Date();
        const actualDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const newStatement = {
            billValue: value,
            descriptionBillToPay: descriptionBillToPay,
            billPaymentDate: actualDate,
        };
        if (!name || !cpf || !value) {
            res.statusCode = 422;
            throw new Error("Error: Check the parameters");
        }
        const userExist = data_1.users.find((item) => {
            return item.name === name && item.cpf === cpf;
        });
        if (!userExist) {
            res.statusCode = 404;
            throw new Error("Error: Client with this CPF not found");
        }
        if (userExist) {
            userExist.statement.push(newStatement);
            console.log(userExist);
            res.status(200).send({
                message: `Balance is: ${userExist === null || userExist === void 0 ? void 0 : userExist.balance}`,
                data: userExist,
            });
        }
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.post("/users/payment", (req, res) => {
    try {
        const { name, cpf, billValue } = req.body;
        if (!name || !cpf || !billValue) {
            res.statusCode = 422;
            throw new Error("Check the parameters!");
        }
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("Not found list users");
        }
        const date = new Date();
        const actualDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const paymentValue = billValue * -1;
        const newStatement = {
            billValue: paymentValue,
            description: "Pagamento boleto",
            date: actualDate,
        };
        const existsUser = data_1.users.filter((item) => {
            if (item.cpf === cpf && item.name === name) {
                item.statement.push(newStatement);
                return item;
            }
        }).length !== 0;
        if (!existsUser) {
            res.statusCode = 412;
            throw new Error("CPF, name not registered");
        }
        res.status(200).send({ message: `Account balance`, data: data_1.users });
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.put("/users/updatedBalance", (req, res) => {
    try {
        const { name, cpf, billValue } = req.body;
        if (!name || !cpf || !billValue) {
            res.statusCode = 422;
            throw new Error("Check the parameters!");
        }
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("Not found list users");
        }
        const date = new Date();
        const actualDate = `${date.getDay()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        const existsUser = data_1.users.filter((item) => {
            if (item.cpf === cpf && item.name === name) {
                item.statement.map((item) => {
                    if (item.billPaymentDate < actualDate) {
                        console.log(typeof item.billPaymentDate);
                        console.log(typeof actualDate);
                    }
                });
            }
        }).length !== 0;
        if (!existsUser) {
            res.statusCode = 412;
            throw new Error("CPF, name not registered");
        }
        res.status(200).send({ message: `Account balance`, data: data_1.users });
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.post("/users/transfer", (req, res) => {
    const { CPF, toCPF, value } = req.body;
    const name = req.body.name;
    const toName = req.body.toName;
   
    try {
        if (!data_1.users) {
            res.statusCode = 404;
            throw new Error("List not found.");
        }
        if (!name || !CPF || !toName || !toCPF || !value) {
            res.statusCode = 400;
            throw new Error("Inform your name and CPF, the value, name and CPF of the person you want to transfer for.");
        }
        if (isNaN(Number(value)) || Number(value) < 0) {
            res.statusCode = 422;
            throw new Error("Inform a valid value for billValue - type number bigger than U$0.00.");
        }
        const clientByNameAndCPF = data_1.users.find((item) => {
            return item.name === name && item.cpf === CPF;
        });
        const clientToSend = data_1.users.find((item) => {
            return item.name === toName && item.cpf === toCPF;
        });
        if (!clientByNameAndCPF) {
            res.statusCode = 404;
            throw new Error("Client with this name and CPF not found");
        }
        if (!clientToSend) {
            res.statusCode = 404;
            throw new Error("Receiver client with this name and CPF not found");
        }
        let hasBalanceToPay = 0;
        if (clientByNameAndCPF !== undefined && clientToSend !== undefined) {
            hasBalanceToPay = (clientByNameAndCPF === null || clientByNameAndCPF === void 0 ? void 0 : clientByNameAndCPF.balance) - Number(value);
        }
        if (clientByNameAndCPF !== undefined &&
            clientToSend !== undefined &&
            hasBalanceToPay < 0) {
            res.statusCode = 401;
            throw new Error("Client does not have enough balance for this transaction.");
        }
        const today = new Date();
        const newToday = `${today.getDate()}/${today.getMonth() + 1}/${today.getFullYear()}`;
        if (clientByNameAndCPF !== undefined &&
            clientToSend !== undefined &&
            hasBalanceToPay >= 0) {
            clientByNameAndCPF.statement = [
                ...clientByNameAndCPF.statement,
                {
                    billValue: -1 * Number(value),
                    billPaymentDate: newToday,
                    descriptionBillToPay: `Transfer to ${toName}`,
                },
            ];
            clientToSend.statement = [
                ...clientToSend.statement,
                {
                    billValue: Number(value),
                    billPaymentDate: newToday,
                    descriptionBillToPay: `Transfer from ${name}`,
                },
            ];
            res.status(200).send({
                message: "Transfer performed successfully",
                data: clientByNameAndCPF.statement,
                dataTo: clientToSend.statement,
            });
        }
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003.");
});
//# sourceMappingURL=index.js.map