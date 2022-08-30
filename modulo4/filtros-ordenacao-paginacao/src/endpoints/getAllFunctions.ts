import { Request, Response } from "express";
import { connection } from "../data/dataBase";

export async function getAllFunctions(
   req: Request,
   res: Response
):Promise<any> {
  try {

     let name = req.query.name as string;
     let info = req.query.info as string;
     let type = req.params.type as string;
     let page = Number(req.query.page)
     let size = Number(req.query.size)
     let offset = size*(page-1)
     let ordenation = "ASC"

 
   if(!name){
      name =""
    }
    if(info !== "name" && info !=="type"){
      info = "name"; 
      ordenation = "DESC"
   }

    if(page < 1) {
      page = 1
    }
  
    if(size < 1) {
      size = 5
    }
     const getAll = await connection("aula48_exercicio")
     .select()
     .where("name", "like", `%${name}%`)
     .orWhere("type", "like", `%${type}`)
     .orderBy(info, ordenation)
     .limit(size)
     .offset(offset)


     res.status(200).send(getAll)
     
  } catch (error: any) {
      res.send(error.message || error.sqlMessage)
  }
}
