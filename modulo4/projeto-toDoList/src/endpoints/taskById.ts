import { Request, Response } from "express";
import getTaskById from "../data/getTaskById";

export default async function taskById(req: Request, res: Response):Promise<void> {
  try {
    const id = Number(req.params.id);

    if (!id) {
      res.statusCode = 400;
      throw new Error("All fields cannot be empty");
    }

    const dateToBR = (data: string): string => {
      const fullDate = data.split(" ");
      const year = fullDate[3];
      const month = fullDate[1];
      const day = fullDate[2];
      const arrayMonth = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Oct",
        "Nov",
        "Dec",
      ];
      const monthCorrect = (arrayMonth.indexOf(month))+1;
      return `${day}/${monthCorrect}/${year}`;
    };

    const result = await getTaskById(id);

    const newLimit_date = dateToBR(String(result[0].limit_date));

    const newTaskToDisplay = {...result[0],
      limit_date: newLimit_date
    };

    res.status(201).send(newTaskToDisplay);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}
