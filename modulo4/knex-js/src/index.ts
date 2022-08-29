import express, { Express } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  },
});

const app: Express = express();
app.use(express.json());
app.use(cors());

import { Request, Response } from "express";

// Esse arquivo seria o index.ts

const getActorById = async (id: string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Actor WHERE id = '${id}'
  `);

  return result[0][0];
};

// // Assim a chamada funciona fora dos endpoints com .then()/.catch
// getActorById("001")
// 	.then(result => {
// 		console.log(result)
// 	})
// 	.catch(err => {
// 		console.log(err)
// 	});

// // Assim a chamada funciona fora dos endpoints com await
// (async () => {
//   console.log(await getActorById("001") )
// })()

// Ou então podemos chamá-la dentro de um endpoint
app.get("/users/:id", async (req: Request, res: Response) => {
  try {
    const id = req.params.id;

    console.log(await getActorById(id));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
}); // bata no http://localhost:3003/users/001 e veja o que acontece no terminal

const getActorByName = async (name: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT * FROM Actor WHERE name = '${name}'
  `);

    return result[0][0];
  } catch (error: any) {
    console.log(error.message);
  }
};

app.get("/users/byName/:name", async (req: Request, res: Response) => {
  try {
    const { name } = req.params;

    console.log(await getActorByName(name));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

const getActorByGender = async (gender: string): Promise<any> => {
  try {
    const result = await connection.raw(`
    SELECT COUNT(*) as count FROM Actor WHERE gender = '${gender}'
  `);

    return result[0][0];
  } catch (error: any) {
    console.log(error.message);
  }
};

app.get("/users/byGender/:gender", async (req: Request, res: Response) => {
  try {
    const { gender } = req.params;

    console.log(await getActorByGender(gender));

    res.end();
  } catch (error: any) {
    console.log(error.message);
    res.status(500).send("Unexpected error");
  }
});

// Exercício 2 - a) Uma função que receba um salário e um id e realiza a atualização do
// salário do ator em questão

const updateActor = async (id: string, salary: number): Promise<any> => {
  await connection("Actor")
    .update({
      salary: salary,
    })
    .where("id", id);
  return await connection("Actor").select("*").where("id", id);
};

app.put("/actor/update/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const { salary } = req.body;

    if (!id || !salary) {
      res.statusCode = 400;
      throw new Error("Id and salary fields cannot be empty");
    }

    const newActor = await updateActor(id, salary);

    res.status(200).send(newActor);
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

// Exercício 2 - b) Uma função que receba um id e delete um ator da tabela
const deleteActor = async (id: string): Promise<any> => {
  await connection("Actor").delete().where("id", id);

  return await connection("Actor").select("*");
};

app.delete("/actor/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;

    if (!id) {
      res.statusCode = 400;
      throw new Error("Id field cannot be empty");
    }

    await deleteActor(id);
    const newList = await connection("Actor").select("*");

    res.status(200).send(newList);
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

// Exercício 2-c

const avgSalary = async (gender: string): Promise<any> => {
  const result = await connection("Actor")
    .avg("salary as average")
    .where("gender", gender);

  return `The average salary of the ${gender} actors is R$ ${result[0].average}`;
};

app.get("/actor/average/:gender", async (req: Request, res: Response) => {
  try {
    const { gender } = req.params;

    if (!gender) {
      res.statusCode = 400;
      throw new Error("Id fields cannot be empty");
    }

    const responseAvg = await avgSalary(gender);
    res.status(200).send(responseAvg);
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

// Exercício 3 - Acima

// Exercício 4 - Acima

// Exercício 5 (Desafio)

const createFilme = async (
  id: string,
  name: string,
  sinopse: string,
  data_de_lancamento: Date,
  avaliacao: number,
  release_date: Date,
  playing_limit_date: Date
) => {
  await connection
    .insert({
      id,
      name,
      sinopse,
      data_de_lancamento,
      avaliacao,
      release_date,
      playing_limit_date
    })
    .into("Filme");
};

app.post("/filme", async (req: Request, res: Response) => {
  try {
    const {
      id,
      name,
      sinopse,
      data_de_lancamento,
      avaliacao,
      release_date,
      playing_limit_date
    } = req.body;

    if (
      !id ||
      !name ||
      !sinopse ||
      !data_de_lancamento ||
      !avaliacao ||
      !release_date ||
      !playing_limit_date
    ) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    await createFilme(
      id,
      name,
      sinopse,
      data_de_lancamento,
      avaliacao,
      release_date,
      playing_limit_date
    );

    res.status(200).send(await connection("Filme").select("*"));
  } catch (error: any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

// Exercício 6 (Desafio)
const getAllMovies = async (): Promise<any> => {
  return await connection('Filme').select("*").limit(5)
};

app.get("/filme", async (req: Request, res: Response) => {
  try {
    const filme = await getAllMovies();

    res.status(200).send(filme);
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});

// Exercício 7 (Desafio)

const searchMovie = async (search:string): Promise<any> => {
  const result = await connection.raw(`
    SELECT * FROM Filme WHERE (name LIKE '%${search}%' OR sinopse LIKE '%${search}%')
   `);

  return result[0];
};

app.get("/filme/search", async (req: Request, res: Response) => {
  try {
    const search:string = req.query.search as string
    console.log(search)
    if(!search) {
      res.statusCode = 400;
      throw new Error("Search field cannot be empty");
    }

    const movies = await searchMovie(search);

    res.status(200).send({
      movies: movies,
    });
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
});


const server = app.listen(process.env.PORT || 3003, () => {
  if (server) {
    const address = server.address() as AddressInfo;
    console.log(`Server is running in http://localhost: ${address.port}`);
  } else {
    console.error(`Failure upon starting server.`);
  }
});
