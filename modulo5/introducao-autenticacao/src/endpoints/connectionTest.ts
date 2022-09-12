import { Request, Response } from "express";

export default async function connectionTest(req:Request, res:Response) {
  try {

    res.status(200).send({ message: "Successful Connection" });

  } catch (error:any) {
    console.log(error.message);
    res.status(res.statusCode || 500).send("Unexpected error");
  }
} 