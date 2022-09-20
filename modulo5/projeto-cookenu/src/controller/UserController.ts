import { Request, Response } from "express";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { HashManager } from "../services/HashManager";
import { GenerateId } from "../services/IdGenarator";
import { Authenticator } from "../services/Authenticator";
import { feedDB, User, userDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  signup = async (req: Request, res: Response) => {
    try {
      const { user_name, user_email, user_password, role } = req.body;

      const userBusiness = new UserBusiness();

      const user: userDTO = {
        user_name,
        user_email,
        user_password,
        role,
      };
      const result = await userBusiness.signup(user);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { user_email, user_password } = req.body;

      const userBusiness = new UserBusiness();

      const token = await userBusiness.login(user_email, user_password);

      res.status(200).send({ token });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization as string;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const userBusiness = new UserBusiness();

      const userProfile = await userBusiness.getProfile(token);

      res.status(200).send({ User: userProfile });
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

      const authenticationUser = new Authenticator().verifyToken(token);

      const userBusiness = new UserBusiness();

      const userById = await userBusiness.getById(user_id, token);

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

  postFollow = async (req: Request, res: Response) => {
    try {
      const { follower_id } = req.body;
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const userBusiness = new UserBusiness();

      const searchFeed = await userBusiness.postFollow(follower_id, token);
  
      res.status(200).send({
        message: { searchFeed },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  deleteFollow = async (req: Request, res: Response) => {
    try {
      const { follower_id } = req.body;
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const newuserBusiness = new UserBusiness();

      const userById = await newuserBusiness.deleteFollow(follower_id, token);

      res.status(200).send({
        message: { userById },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getFeedByFollower = async (req: Request, res: Response) => {
    try {
      const tokenUser: any = { token: req.headers.authorization };

      const userBusiness = new UserBusiness();

      const result = await userBusiness.getFeedByFollower(tokenUser);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

    deleteAccount = async (req: Request, res: Response) => {
      try {
        const user_id = req.params.user_id;
        const token = req.headers.authorization!;

        const authenticationUser: any = new Authenticator().verifyToken(token);

        const newUserBusiness: any = new UserBusiness();

        const userById = await newUserBusiness.getUserById(user_id);    

        res.status(200).send({ message: "tst" });
      } catch (error: any) {
        res.status(error.statusCode || 500).send({ message: error.message });
      }
    };
}
