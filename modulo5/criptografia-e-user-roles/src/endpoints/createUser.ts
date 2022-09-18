import { Request, Response } from "express";
import { UserDataBase } from "../data/userDataBase";
import { EmailExists } from "../error/EmailExists";
import { InvalidCredencial } from "../error/IncorrectPassword";
import { Authenticator } from "../services/Authenticator";
import { MissingFields } from "../error/MissingFields";
import { GenerateId } from "../services/IdGenarator";
import { User } from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";
import { HashManager } from "../services/HashManager";
import { PermissionDenied } from "../error/PermissionDenied";
import { ExpiredToken } from "../error/ExpiredToken";

export class UserEndpoint {
  public async createUser(req: Request, res: Response) {
    try {
      const { email, password, role} = req.body;

      if (!email || !password || !role) {
        throw new MissingFields();
      }

      const userDataBase = new UserDataBase();

      const emailAlreadyExist = await userDataBase.getUserByEmail(email);

      if (emailAlreadyExist.length) {
        throw new EmailExists();
      }

      if (
        !req.body.email ||
        req.body.email.indexOf("@") === -1 ||
        !req.body.password ||
        req.body.password.length < 6
      ) {
        throw new MissingFields();
      }

      const id = new GenerateId().createId();
      const hashPassword = await new HashManager().generateHash(password);
      const roleUpper = role.toUpperCase()
      const user = new User(id, email, hashPassword, roleUpper);

      await userDataBase.createUser(user);

      const token = new Authenticator().generateToken({ id, role:roleUpper});

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
      const emailExist = await userData.getUserByEmail(email);

      if (!emailExist) {
        throw new InvalidCredencial();
      }

      const correctPassword = await new HashManager().compareHash(
        password,
        emailExist[0].password
      );
      if (!correctPassword) {
        throw new InvalidCredencial();
      }

      const token = new Authenticator().generateToken(emailExist[0].id);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getUserById(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

    if(authenticationUser.role === "ADMIN") {
        throw new PermissionDenied()
    }
      const userData = new UserDataBase();
      const user = await userData.getUserById(authenticationUser.id);

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

  public async deleleteUserById(req: Request, res: Response) {
    try {
      const {id} = req.body

      if (!id) {
        throw new InvalidCredencial();
      }

      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      if(authenticationUser.role === "NORMAL") {
        throw new PermissionDenied();
      }

      const userData = new UserDataBase();

      const user = await userData.getUserById(authenticationUser.id);

      if (!user) {
        throw new InvalidCredencial();
      }

      const result = await userData.deleteUserById(id);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  }

  async getUserByToken(req: Request, res: Response) {
    try {
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      if(authenticationUser === false) {
        throw new ExpiredToken()

      }

      const userData = new UserDataBase();
      const user = await userData.getUserById(authenticationUser.id);

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
