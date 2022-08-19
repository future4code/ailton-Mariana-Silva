import express, { Request, Response } from "express";
import cors from "cors";
import { User, users, Statement } from "./data";

const app = express();

app.use(cors());
app.use(express.json());

//Endpoint test - API Test
app.get("/test", (req: Request, res: Response) => {
  res.send({
    message: "API funcionando!",
  });
});

//Endpoint 1 - Create user
app.post("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, birthDate } = req.body;

    if (!name || !cpf || !birthDate) {
      res.statusCode = 400;
      throw new Error(
        "Error: Name, CPF and Birth date, not identified, please check the fields "
      );
    }

    const dateToTimeStamp = (data: string): number => {
      const fullDate = data.split("/");
      const year = Number(fullDate[2]);
      const month = Number(fullDate[1]) - 1;
      const day = Number(fullDate[0]);
      return new Date(year, month, day).getTime();
    };

    let timestampToday = new Date().getTime();
    let age =
      timestampToday / 31536000000 - dateToTimeStamp(birthDate) / 31536000000;

    if (age < 18) {
      res.statusCode = 412;
      throw new Error("Error: User must be over 18 years old");
    }

    const findCpf: Boolean =
      users.filter((item) => {
        return item.cpf.includes(cpf);
      }).length !== 0;

    if (findCpf) {
      res.statusCode = 422;
      throw new Error("Error: CPF already exists.");
    }

    const newUser: User = {
      name: name,
      cpf: cpf,
      birthDate: birthDate,
      balance: 0,
      statement: [],
    };
    users.push(newUser);
    res.status(200).send({ message: "User created successfully!" });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Endpoint 2 - Get all users
app.get("/users", (req: Request, res: Response) => {
  try {
    if (!users) {
      res.statusCode = 404;
      throw new Error("Error: Users List not found ");
    }
    res.status(200).send({ users: users });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Endpoint 3 - Get user balance
app.get("/users/:cpf", (req: Request, res: Response) => {
  try {
    const { cpf } = req.params;

    if (!cpf) {
      res.statusCode = 422;
      throw new Error("Error: Check the CPF. Needs to be: 000.000.000-00");
    }
    const userExist = users.find((item) => {
      return item.cpf === cpf;
    });

    if (!userExist) {
      res.statusCode = 404;
      throw new Error("Error: Client with this CPF not found");
    }

    const exists = users.find((item) => {
      if (item.cpf === cpf) {
        return item.balance;
      }
    });
    res.status(200).send({ message: `Balance is: ${exists?.balance}` });
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Endpoint 4 - Put Add deposit
app.put("/users", (req: Request, res: Response) => {
  try {
    const { name, cpf, value, descriptionBillToPay } = req.body;

    const date = new Date();
    const actualDate = `${date.getDate()}/${
      date.getMonth() + 1
    }/${date.getFullYear()}`;

    const newStatement: Statement = {
      billValue: value,
      descriptionBillToPay: descriptionBillToPay,
      billPaymentDate: actualDate,
    };

    if (!name || !cpf || !value) {
      res.statusCode = 422;
      throw new Error("Error: Check the parameters");
    }

    const userExist = users.find((item) => {
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
        message: `Balance is: ${userExist?.balance}`,
        data: userExist,
      });
    }
  } catch (error: any) {
    res.status(res.statusCode || 500).send({ message: error.message });
  }
});

//Endpoint 5 - Put pay bill



app.listen(3003, () => {
  console.log("Servidor rodando na porta 3003.");
});
