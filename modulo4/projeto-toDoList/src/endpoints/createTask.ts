import { Request, Response } from "express";
import { connection } from "../data/dataBase";
import postTask from "../data/postTask";

export default async function createTask(req:Request, res:Response):Promise<void>{
  try {
    const {title, task_description, limit_date, creator} = req.body

    if(!title || !task_description || !limit_date || !creator) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const dateBRToUS = (data: string): string => {
      const fullDate = data.split("/");
      const year = fullDate[2];
      const month = fullDate[1];
      const day = fullDate[0];
      return `${year}-${month}-${day}`;
    };
  
    const limit_date_initial = dateBRToUS(limit_date);

    await postTask(title, task_description, limit_date_initial, creator)

    res.status(201).send(await connection("TasksList").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}