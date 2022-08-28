import { Request, Response } from "express";
import getUserById from "../data/getUserById";

export default async function userById(req: Request, res: Response) {
  try {
    const id = Number(req.params.id);

    if (!id) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const result = await getUserById(id);

    res.status(201).send(result);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
