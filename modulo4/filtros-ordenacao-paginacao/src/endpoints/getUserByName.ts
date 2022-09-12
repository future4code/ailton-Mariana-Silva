import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";
import { connection } from "../data/dataBase";

export const getUserbyName = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let name = req.query.name as string

    if (!name) {
      name = ""
    }
    const getUserByName = await connection("aula48_exercicio")
     .select("id","name","email", "type")
     .where("name", "like", `%${name}%`)

    res.status(200).send(getUserByName);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};