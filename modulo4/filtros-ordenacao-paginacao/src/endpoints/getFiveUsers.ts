import { Request, Response } from "express";
import { connection } from "../data/dataBase";

export async function getFiveUsers(
   req: Request,
   res: Response
):Promise<void> {
  try {
     
    let page = Number(req.query.page);
    let size = Number(req.query.size)
    let offset = size*(page-1)

   if(page < 1) {
    page = 1
  }

  if(size < 1) {
    size = 5
  }
      const getFiveUsers = await connection("aula48_exercicio")
     .select()
     .limit(size)
     .offset(offset)

     res.status(200).send(getFiveUsers)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}