import { Request, Response } from "express";
import { PostBusiness } from "../business/PostBusiness";
import {
  IAddLikeDTO,
  ICreatePostDTO,
  IDeletePostDTO,
  IRemoveLikeDTO,
} from "../models/Post";

export class PostController {
  constructor(private postBusiness: PostBusiness) {}

  public createPost = async (req: Request, res: Response) => {
    try {
      const post: ICreatePostDTO = {
        token: req.headers.authorization!,
        content: req.body.content,
      };

      const result = await this.postBusiness.createPost(post);

      res.status(201).send({ message: result });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public getPosts = async (req: Request, res: Response) => {
    try {
      const token = req.headers.authorization!;

      const result = await this.postBusiness.getPosts(token);

      res.status(201).send(result);
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public deletePost = async (req: Request, res: Response) => {
    try {
      const post: IDeletePostDTO = {
        token: req.headers.authorization!,
        postId: req.params.id,
      };

      const result = await this.postBusiness.deletePost(post);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public addLike = async (req: Request, res: Response) => {
    try {
      const post: IAddLikeDTO = {
        token: req.headers.authorization!,
        postId: req.params.id,
      };

      const result = await this.postBusiness.addLike(post);

      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };

  public removeLike = async (req: Request, res: Response) => {
    try {
      const post: IRemoveLikeDTO = {
        token: req.headers.authorization!,
        postId: req.params.id,
      };

      const result = await this.postBusiness.removeLike(post);
      res.status(200).send({ message: result });
    } catch (error: any) {
      res.status(400).send({ message: error.message });
    }
  };
}
