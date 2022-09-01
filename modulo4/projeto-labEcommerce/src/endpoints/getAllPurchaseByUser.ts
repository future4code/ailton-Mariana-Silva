import { Request, Response } from "express";
import { selectAllPurchasesByUser } from "../data/selectAllPurchasesByUser";

export const getAllPurchasesByUser = async (req: Request, res: Response) => {
  try {
    const user_id = Number(req.params.user_id)
    const users = await selectAllPurchasesByUser(user_id);

    res.status(200).send(users);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}