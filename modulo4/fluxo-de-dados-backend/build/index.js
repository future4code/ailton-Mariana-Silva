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
    res.send("A api esta funcionando!");
});
app.post("/newProduct", (req, res) => {
    try {
        const { name, price } = req.body;
        if (!name || !price) {
            throw new Error("Insira nome e preço");
        }
        if (typeof name !== "string") {
            throw new Error("erro caso name seja diferente de string");
        }
        if (typeof price !== "number") {
            throw new Error("erro caso price seja diferente de number");
        }
        if (price <= 0) {
            throw new Error("erro caso price seja igual ou menor que 0");
        }
        const newId = String(data_1.listProducts.length + 1);
        const newProduct = {
            id: newId,
            name,
            price,
        };
        data_1.listProducts.push(newProduct);
        res.status(201).send({ message: "ok", listProducts: data_1.listProducts });
    }
    catch (error) {
        res.send({ error });
    }
});
app.put("/edditPrice/:id", (req, res) => {
    try {
        const id = req.params.id;
        const { price } = req.body;
        if (!price && price.length === 0) {
            throw new Error("Error ao receber id ou produto");
        }
        if (typeof price !== "number") {
            throw new Error("erro caso price seja diferente de number");
        }
        if (price <= 0) {
            throw new Error("erro caso price seja igual ou menor que 0");
        }
        const changePrice = data_1.listProducts.map((item) => {
            if (item.id === id) {
                item.price = price;
            }
        });
        const updatePrice = data_1.listProducts.filter((item) => {
            return item.id === id;
        });
        if (updatePrice.length === 0) {
            throw new Error(" erro caso o produto a ser editado não seja encontrado");
        }
        res.send({ message: "ok", listProducts: data_1.listProducts });
    }
    catch (error) {
        res.send({ message: error.message });
    }
});
app.delete("/deleteProduct/:id", (req, res) => {
    try {
        const id = req.params.id;
        const deleted = data_1.listProducts.findIndex((item) => {
            return item.id === id;
        });
        if (deleted === -1) {
            return res.send("produto não encontrado");
        }
        data_1.listProducts.splice(deleted, 1);
        res.send({ message: "ok", deleted });
    }
    catch (error) {
        res.send(error);
    }
});
app.get("/allProducts", (req, res) => {
    const { search } = req.query;
    try {
        let ListToDisplay = [];
        if (search === "") {
            ListToDisplay = [...data_1.listProducts];
            console.log(ListToDisplay);
        }
        const filteredeByName = data_1.listProducts.filter((item) => {
            return item.name === search;
        });
        if (search !== "" && filteredeByName.length === 0) {
            res.statusCode = 404;
            throw new Error("Product not found");
        }
        if (filteredeByName.length !== 0) {
            ListToDisplay = [...filteredeByName];
        }
        res.status(200).send(ListToDisplay);
    }
    catch (error) {
        res.status(res.statusCode || 500).send({ message: error.message });
    }
});
app.listen(3003, () => {
    console.log("Servidor rodando na porta 3003");
});
//# sourceMappingURL=index.js.map