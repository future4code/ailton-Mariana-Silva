import { Request, Response } from "express";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await selectAllUsers();

    res.status(200).send(users);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}