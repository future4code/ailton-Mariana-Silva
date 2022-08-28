import { Request, Response } from "express";
import { connection } from "../data/dataBase";
import postUser from "../data/postUser";

export default async function createUser(req:Request, res:Response):Promise<void> {
  try {
    const {user_name, nickname, email} = req.body

    if(!user_name || !nickname || !email) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    await postUser(user_name, nickname, email)

    res.status(201).send(await connection("UsersList").select("*"));
    
  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
}