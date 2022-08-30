import { Request, Response } from "express";
import { connection } from "../data/dataBase";

export const getUserbyType = async (
  req: Request,
  res: Response
): Promise<void> => {
  try {
    let getType = req.params.type as string

    if (!getType) {
      getType = ""
    }
    const getUserByType = await connection("aula48_exercicio")
    .where({type: getType})
     


    res.status(200).send(getUserByType);
  } catch (error: any) {
    console.log(error);
    res.send(error.message || error.sqlMessage);
  }
};