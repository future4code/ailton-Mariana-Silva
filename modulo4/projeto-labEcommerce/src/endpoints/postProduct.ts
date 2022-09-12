import { Request, Response } from "express"
import { createProduct } from "../data/createProduct"

export const postProduct = async (req: Request, res: Response): Promise<any> => {
    try {
        const { name, price, image_url } = req.body

        if (!name || !price || !image_url) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        if(!image_url.includes("http") || !image_url.includes("/") || !image_url.includes(":")) {
            res.statusCode = 400
            throw new Error("Error: Please inform a valid url")
        }

        await createProduct(name, Number(price), image_url)

        res.status(201).send("Product created successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message)
    }
}
