import { Request, Response } from "express";
import { UserDataBase } from "../data/userDataBase";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailExists } from "../error/EmailExists";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";
import { GenerateId } from "../services/IdGenarator";
import { Authenticator } from "../services/Authenticator";
import { User } from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";

export class userEndpoint {
  signup = async (req: Request, res: Response) => {
    try {
      const { user_name, user_email, user_password } = req.body;

      if (
        !user_name ||
        !user_email ||
        !user_email.includes("@") ||
        !user_password ||
        user_password.length < 6
      ) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserDataBase();

      const emailAlreadyExist = await userDataBase.getUserByEmail(user_email);
      if (emailAlreadyExist) {
        throw new EmailExists();
      }

      const user_id: any = new GenerateId().createId();

      const hashPassword: string = await new HashManager().generateHash(
        user_password
      );

      const newUser = new User(user_id, user_name, user_email, hashPassword);

      const result = await userDataBase.createUser(newUser);

      const token = new Authenticator().generateToken(user_id);

      res.status(201).send({ message: result, token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { user_email, user_password } = req.body;

      if (
        !user_email ||
        !user_password ||
        !user_email.includes("@") ||
        user_password.length < 6
      ) {
        throw new InvalidCredentials();
      }

      const userData = new UserDataBase();

      const emailExist: any = await userData.getUserByEmail(user_email);

      let correctPassword: boolean = false;
      if (!emailExist) {
        throw new EmailNoExists();
      } else {
        const hash = emailExist.getPassword();
        correctPassword = await new HashManager().compareHash(
          user_password,
          hash
        );
      }

      if (!correctPassword) {
        throw new IncorrectPassword();
      }

      const token = new Authenticator().generateToken(emailExist.getId());

      res.status(200).send({ "token: ": token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getByEmail = async (req: Request, res: Response) => {
    try {
      const { email } = req.body;

      if (!email || !email.includes("@")) {
        throw new InvalidCredentials();
      }

      const userDataBase = new UserDataBase();

      const userByEmail = await userDataBase.getUserByEmail(email);
      if (!userByEmail) {
        throw new EmailNoExists();
      }

      res.status(201).send({ message: userByEmail });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const newUserData = new UserDataBase();

      const userById = await newUserData.getUserById(authenticationUser);

      res.status(200).send({
        message: {
          user_id: userById?.getId(),
          user_name: userById?.getName(),
          user_email: userById?.getEmail(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getById = async (req: Request, res: Response) => {
    try {
      const user_id = req.params.user_id;
      const token = req.headers.authorization!;

      if (!user_id) {
        throw new InvalidCredentials();
      }

      const authenticationUser = new Authenticator().verifyToken(token);
      if (!authenticationUser) {
        throw new PermissionDenied();
      }

      const newUserData = new UserDataBase();

      const userById = await newUserData.getUserById(user_id);

      res.status(200).send({
        message: {
          user_id: userById?.getId(),
          email: userById?.getEmail(),
          user_name: userById?.getName(),
        },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };
}
