import { Request, Response } from "express";
import getUserByName from "../data/getUserByName";

export default async function userByName(req: Request, res: Response) {
  try {
    const search = req.query.search as string

    if(!search) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const result = await getUserByName(search);

    if(!result) {
      res.statusCode = 404;
      throw new Error("No user with this data");
    }

    res.status(201).send(result);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
