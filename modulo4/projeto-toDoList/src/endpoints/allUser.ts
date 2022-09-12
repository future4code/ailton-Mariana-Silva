import { Request, Response } from "express";
import getAllUser from "../data/getAllUser";

export default async function allUser(req: Request, res: Response) {
  try {
    const result = await getAllUser();

    res.status(201).send(result);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
