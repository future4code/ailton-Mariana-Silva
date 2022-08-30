import { Request, Response } from "express";
import selectUserByName from "../data/selectUserByName";
import { connection } from "../data/dataBase";

export const getUsersOrdered = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let info = req.query.info as string

    if(info !== "name" && info !=="type") {
        info = "email"
    }

    const getUsersOrdered = await connection("aula48_exercicio")
     .select()
     .orderBy(info, "ASC")

    res.status(200).send(getUsersOrdered);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};