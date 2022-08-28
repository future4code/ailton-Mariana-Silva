import { Request, Response } from "express";
import { connection } from "../data/dataBase";
import getTaskByCreator from "../data/getTaskByCreator";

export default async function taskByCreator(req:Request, res:Response):Promise<void> {
  try {
    const creator = Number(req.query.creator)

    if(!creator) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const result = await getTaskByCreator(creator)

    res.status(201).send(result);
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}