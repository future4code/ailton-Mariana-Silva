import { Request, Response } from "express"
import { createPurchase } from "../data/createPurchase"
import { selectAllProducts } from "../data/selectAllProducts"
import { Product } from "../types"

export const postPurchase = async (req: Request, res: Response): Promise<any> => {
    try {
        const { user_id, product_id, quantity } = req.body

        if (!user_id || !product_id || !quantity) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        await createPurchase(user_id, Number(product_id), quantity)

        res.status(201).send("Product created successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message)
    }
}
