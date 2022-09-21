import { Request, Response } from "express";
import { FollowDTO, GetProfileByIdDTO, LoginDTO, userDTO } from "../model/User";
import { UserBusiness } from "../business/UserBusiness";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  signup = async (req: Request, res: Response) => {
    try {
      const { user_name, user_email, user_password, role } = req.body;

      const user: userDTO = {
        user_name,
        user_email,
        user_password,
        role,
      };
      const result = await this.userBusiness.signup(user);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  login = async (req: Request, res: Response) => {
    try {
      const { user_email, user_password } = req.body;

      const user: LoginDTO = {
        user_email,
        user_password,
      };

      const result = await this.userBusiness.login(user);

      res.status(200).send({ result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };

  getProfile = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const userProfile = await this.userBusiness.getProfile(token);
console.log("userProfile",userProfile)
      res.status(200).send({ message: userProfile });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getProfileById = async (req: Request, res: Response) => {
    try {
      const user_id = req.params.user_id;
      const token = req.headers.authorization!;

      const user: GetProfileByIdDTO = {
        user_id,
        token,
      };

      const userById = await this.userBusiness.getProfileById(user);

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

      const user: FollowDTO = {
        follower_id,
        token,
      };

      const searchFeed = await this.userBusiness.postFollow(user);

      res.status(200).send({
        message: searchFeed ,
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

      const user: FollowDTO = {
        follower_id,
        token,
      };

      const userById = await this.userBusiness.deleteFollow(user);

      res.status(200).send({
        message: { userById },
      });
    } catch (error: any) {
      res
        .status(error.statusCode || 500)
        .send({ message: error.message || error.sqlMessage });
    }
  };

  getFeed = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const result = await this.userBusiness.getFeed(token);

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

      const user: GetProfileByIdDTO = {
        user_id,
        token,
      };

      const result = await this.userBusiness.deleteAccount(user);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(error.statusCode || 500).send({ message: error.message });
    }
  };
}
