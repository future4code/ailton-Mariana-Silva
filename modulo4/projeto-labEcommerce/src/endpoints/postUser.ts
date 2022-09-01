import { Request, Response } from "express"
import { createUser } from "../data/createUser"

export const postUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            res.statusCode = 422
            throw new Error("Please check inputs. Missing values.")
        }

        if(!email.includes("@") || !email.includes(".")  ) {
            res.statusCode = 400
            throw new Error("Error: Please inform a valid email: email@email.com")
        }

        await createUser(name, email, password)

        res.status(201).send("User created successfully.")
    } catch (error: any) {
        res.status(res.statusCode).send(error.sqlMessage || error.message)
    }
}
