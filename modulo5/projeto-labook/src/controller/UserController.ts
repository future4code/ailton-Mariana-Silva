import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import { ILoginDTO, ISignupDTO } from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}


  public signup = async (req: Request, res: Response) => {
    try {
        const user: ISignupDTO = {
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        }

        const result = await this.userBusiness.signup(user)

        res.status(201).send({ message: result })
    } catch (error: any) {
        res.status(400).send({ message: error.message })
    }
}

public login = async (req: Request, res: Response) => {
  try {
      const user: ILoginDTO = {
          email: req.body.email,
          password: req.body.password
      }

      const result = await this.userBusiness.login(user)
      res.status(201).send({ message: result })
  } catch (error: any) {
      res.status(400).send({ message: error.message })
  }
}

}
