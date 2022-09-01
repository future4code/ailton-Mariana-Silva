import { Request, Response } from "express";
import { selectAllProducts } from "../data/selectAllProducts";

export const getAllProducts = async (req: Request, res: Response) => {
  try {
    
    let order = req.query.order as string
    let search = req.query.search as string
    
    if(order !== "asc" && order !=="desc") {
      order = ""
    }
    if(!search){
      search = ""
    }
    const products = await selectAllProducts(order, search);

    res.status(200).send(products);
  } catch (error: any) {
    res
      .status(res.statusCode || 500)
      .send({ message: error.message || error.sqlMessage });
  }
}