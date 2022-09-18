import { Request, Response } from "express";
import { UserDataBase } from "../data/userDataBase";
import { EmailExists } from "../error/EmailExists";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { Authenticator } from "../services/Authenticator";
import { MissingFields } from "../error/MissingFields";
import { GenerateId } from "../services/IdGenerator";
import { User } from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";

//Ex4-a)
export class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingFields();
      }

      const userDataBase = new UserDataBase();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      // undefined , null , 0 , true
      if (emailAlreadyExist.length) {
        throw new EmailExists();
      }
      // Ex4-b) and Ex4-c)
      if (
        !req.body.email ||
        req.body.email.indexOf("@") === -1 ||
        !req.body.password ||
        req.body.password.length < 6
      ) {
        throw new MissingFields();
      }

      const id = new GenerateId().createId();

      const user = new User(id, email, password);

      await userDataBase.createUser(user);

      const token = new Authenticator().generateToken(id);

      res.status(201).send({ message: "User created successfully", token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getUserByEmail(req: Request, res: Response) {
    try {
      const { email } = req.body;

      if (!email) {
        throw new MissingFields();
      }

      const userDataBase = new UserDataBase();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (!emailAlreadyExist.length) {
        throw new EmailNoExists();
      }

      if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new MissingFields();
      }

      const result = await userDataBase.getUserByEmail(email);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        throw new MissingFields();
      }

      const userData = new UserDataBase();

      const validLogin = await userData.getUserLogin(email, password);

      if (!validLogin.length) {
        throw new InvalidCredencial();
      }

      const token = new Authenticator().generateToken(validLogin[0].id);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization as string;

      const authenticationUser = new Authenticator().verifyToken(token);

      const userData = new UserDataBase();
      const user = await userData.getUserById(authenticationUser);

      res.status(200).send({
        id: user.id,
        email: user.email,
      });
    } catch (error: any) {
      res.status(400).send({
        message: error.message,
      });
    }
  }
}
