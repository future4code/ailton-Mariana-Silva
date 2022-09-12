import { Request, Response } from "express";
import { selectAllPurchasesByUser } from "../data/selectAllPurchasesByUser";
import { selectAllUsers } from "../data/selectAllUsers";

export const getAllUsers = async (req: Request, res: Response) => {
  try {
    const users = await selectAllUsers();

    for (const user of users) {
      const purchases = await selectAllPurchasesByUser(user.id);

      user.purchases = purchases;
    }

    res.status(200).send(users);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
};
