import { Request, Response } from "express";
import postTaskResponsible from "../data/postTaskResponsible";

export default async function taskResponsible(req:Request, res:Response):Promise<void> {
  try {
    const {task_id, responsible_user_id} = req.body

    if(!task_id || !responsible_user_id) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const result = await postTaskResponsible(Number(task_id), Number(responsible_user_id))

    if(!result) {
      res.statusCode = 404;
      throw new Error("No task with this data");
    }

    res.status(201).send(result);
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}