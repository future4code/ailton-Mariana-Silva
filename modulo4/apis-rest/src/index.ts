import express, { Request, Response } from "express";
import cors from "cors";
import { users, User, ROLES } from "./data";
import { AddressInfo } from "net";

const app = express();
app.use(express.json());
app.use(cors());

// Exercício 1
// a) Método GET
// b) Pelo path

// app.get("/users", (req: Request, res: Response) => {
//   let errorCode = 400;
//   try {
//     res.status(200).send(users);
//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message });
//   }
// });

// Exercício 2
// a) por query params, por ser um único parâmetro e ser opcional
// b) sim, criando um enum para os tipos aceitos (ROLES) e usando um if para testar se os valores passados correspondem aos valores do enum.

// app.get("/users", (req: Request, res: Response) => {
//   let errorCode = 400;
//   try {
//     const type: string = req.query.type as string;

//     if (type.toUpperCase() !== ROLES.ADMIN
//       && type.toUpperCase() !== ROLES.NORMAL) {
//       res.status(422);
//       throw new Error("Invalid value for 'type'.")
//     }

//     const usuariosFiltrados: User[] = users.filter((user) => {
//       return user.type === type;
//     })

//     res.status(200).send(usuariosFiltrados);
//   } catch (error: any) {
//     res.status(errorCode).send({ message: error.message });
//   }
// });

// Exercício 3
// a) query params

app.get("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const type: string = req.query.type as string;
    const name: string = req.query.name as string;

    if (type) {
      if (
        type.toUpperCase() !== ROLES.ADMIN &&
        type.toUpperCase() !== ROLES.NORMAL
      ) {
        res.status(422);
        throw new Error(
          "Invalid value for 'type'. Valid values: 'NORMAL', 'ADMIN'."
        );
      }

      const usuariosFiltrados: User[] = users.filter((user) => {
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
        throw new Error(
          "Invalid value for 'name'. Please enter a valid non-empty string."
        );
      }

      const search: User[] = users.filter((user) => {
        return user.name.toLowerCase().includes(name);
      });

      res.status(200).send(search);
    }

    res.status(200).send(users);
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

// Exercício 4
// a) Nada muda
// b) Não porque foi estabelecido que o método para criação de entidades é o POST. O método PUT é para edição. Mesmo que o endpoint continue funcionando, não é uma boa prática.

app.post("/users", (req: Request, res: Response) => {
  let errorCode = 400;
  try {
    const { name, email, type, age }: User = req.body;
    const id: number = Date.now();
    const user: User = { id, name, email, type, age };

    if (typeof type !== "string") {
      res.status(422);
      throw new Error(
        "Invalid value for 'type'. Value must be of type string."
      );
    }

    if (typeof name !== "string") {
      res.status(422);
      throw new Error(
        "Invalid value for 'name'. Value must be of type string."
      );
    }

    if (!name || !email || !type || !age) {
      res.status(400);
      throw new Error("Please verify that all the fields be filled up.");
    }

    if (typeof email !== "string") {
      res.status(422);
      throw new Error(
        "Invalid value for 'email'. Value must be of type string."
      );
    }

    if (typeof age !== "number") {
      res.status(422);
      throw new Error("Invalid value for 'age'. Value must be of type number.");
    }

    users.push(user);

    res.status(201).send("User successfully created");
  } catch (error: any) {
    res.status(errorCode).send({ message: error.message });
  }
});

//Exercicio 5
app.put("/users/name/", (req: Request, res: Response) => {
    try {
      if (!users) {
        res.statusCode = 404;
        throw new Error("There's no userlist");
      }
  
      users[users.length - 1].name =
        users[users.length - 1].name + " - ALTERADO";
  
      res.status(200).send(users[users.length - 1]);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  });
  
  //Exercicio 6
  app.patch("/users/name/", (req: Request, res: Response) => {
    try {
      if (!users) {
        res.statusCode = 404;
        throw new Error("There's no userlist");
      }
  
      users[users.length - 1].name =
        users[users.length - 1].name + " - REALTERADO";
  
      res.status(200).send(users[users.length - 1]);
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  });
  
  //Exercicio 7
  app.delete("/users/delete/:id", (req, res) => {
    const id: number = Number(req.params.id);
  
    try {
      if (!users) {
        res.statusCode = 404;
        throw new Error("There's no userlist");
      }
      if (isNaN(id)) {
        res.statusCode = 422; //unprocessable entity
        throw new Error("Invalid parameter");
      }
      if (
        users.filter((item) => {
          return item.id === id;
        }).length === 0
      ) {
        res.statusCode = 404;
        throw new Error("User not found");
      }
      const userDeleted = users.filter((item) => {
        return item.id !== id;
      });
      res
        .status(200)
        .send({ message: "User deleted successfully", data: userDeleted });
    } catch (error: any) {
      res.status(res.statusCode || 500).send({ message: error.message });
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Serverg is running in http://localhost:${address.port}`);
  } else {
    console.log(`Failure upon starting server.`);
  }
});
