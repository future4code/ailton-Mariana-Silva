import { Request, Response } from "express";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailExists } from "../error/EmailExists";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";
import { GenerateId } from "../services/IdGenarator";
import { Authenticator } from "../services/Authenticator";
import { feedDB, User, userDTO } from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";
import { MissingFields } from "../error/MissingFields";
import { RecipeDataBase } from "../data/recipeDataBase";
import { NotFollowing } from "../error/NotFollowing";
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
      const { followed_id } = req.body;
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const userBusiness = new UserBusiness();

      const searchFeed = await userBusiness.postFollow(followed_id, token);
      console.log("search feed", searchFeed);
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
      const { followed_id } = req.body;
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      const newuserBusiness = new UserBusiness();

      const userById = await newuserBusiness.deleteFollow(followed_id, token);

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
      const token = req.headers.authorization!;

      const authenticationUser: any = new Authenticator().verifyToken(token);

      if (!authenticationUser) {
        throw new PermissionDenied();
      }

      const userBusiness = new UserBusiness();

      const recipes = await userBusiness.getFeedByFollower(authenticationUser);
      console.log(recipes);

      res.status(200).send({ message: recipes });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  //   deleteById = async (req: Request, res: Response) => {
  //     try {
  //       const user_id = req.params.user_id;
  //       const token = req.headers.authorization!;

  //       if (!user_id) {
  //         throw new InvalidCredentials();
  //       }

  //       const authenticationUser: any = new Authenticator().verifyToken(token);

  //       if (
  //         authenticationUser.role === "normal" ||
  //         authenticationUser === false
  //       ) {
  //         throw new PermissionDenied();
  //       }

  //       const newuserBusiness: any = new UserBusiness();
  //       const userById = await newuserBusiness.getUserById(user_id);

  //       if (!userById) {
  //         throw new EmailNoExists();
  //       }
  //       const newRecipe: any = new RecipeDataBase();
  //       const result = await newuserBusiness.delUserById();
  //       const resultFollows = await newuserBusiness.deleteFollowUser();
  //       const resultRecipe = await newRecipe.delRecipe();

  //       res.status(200).send({ message: result, resultFollows, resultRecipe });
  //     } catch (error: any) {
  //       res.status(error.statusCode || 500).send({ message: error.message });
  //     }
  //   };
}
