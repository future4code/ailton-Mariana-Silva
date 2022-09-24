import { Request, Response } from "express";
import { UserBusiness } from "../business/UserBusiness";
import {
  IDeleteUserInputDTO,
  IEditUserInputDTO,
  IGetUsersInputDTO,
  IGetUsersOutputDTO,
  ILoginInputDTO,
  ISignupInputDTO,
} from "../models/User";

export class UserController {
  constructor(private userBusiness: UserBusiness) {}

  public signup = async (req: Request, res: Response) => {
    try {
      const input: ISignupInputDTO = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.signup(input);

      res.status(201).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  public login = async (req: Request, res: Response) => {
    try {
      const input: ILoginInputDTO = {
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.login(input);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  public getUsers = async (req: Request, res: Response) => {
    try {
      const input: IGetUsersInputDTO = {
        token: req.headers.authorization,
        search: req.query.search as string,
        order: req.query.order as string,
        sort: req.query.sort as string,
        limit: req.query.limit as string,
        page: req.query.page as string,
      };

      const response = await this.userBusiness.getUsers(input);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  public deleteUser = async (req: Request, res: Response) => {
    try {
      const input: IDeleteUserInputDTO = {
        token: req.headers.authorization,
        idToDelete: req.params.id,
      };

      const response = await this.userBusiness.deleteUser(input);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };

  public editUser = async (req: Request, res: Response) => {
    try {
      const input: IEditUserInputDTO = {
        token: req.headers.authorization,
        idToEdit: req.params.id,
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      };

      const response = await this.userBusiness.editUser(input);

      res.status(200).send(response);
    } catch (error) {
      res.status(400).send({ message: error.message });
    }
  };
}
