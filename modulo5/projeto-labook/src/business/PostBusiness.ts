import { PostDataBase } from "../database/PostDatabase";
import { AuthorizationError } from "../errors/AuthorizationError";
import { InvalidPost } from "../errors/InvalidCredentials";
import { PermissionDenied } from "../errors/PermissionDenied";
import { PostAlreadyLiked, PostDidntLiked } from "../errors/PostLiked";
import { PostNotFound } from "../errors/PostNotFound";
import {
  IAddLikeDTO,
  ICreatePostDTO,
  IDeletePostDTO,
  ILikeDB,
  IRemoveLikeDTO,
  Post,
} from "../models/Post";
import { USER_ROLES } from "../models/User";
import { Authenticator } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class PostBusiness {
  constructor(
    private postDataBase: PostDataBase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public createPost = async (post: ICreatePostDTO) => {
    const { token, content } = post;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    if (!content || content.length < 1) {
      throw new InvalidPost();
    }

    const id = this.idGenerator.generate();

    const newPost = new Post(id, content, payload.id);

    return await this.postDataBase.createPost(newPost);
  };
  public getPosts = async (token: string) => {
    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const getAllPost = await this.postDataBase.getPosts();

    const posts = getAllPost.map((posts) => {
      return new Post(
          posts.id,
          posts.content,
          posts.user_id
      )
  })
  for (let post of posts) {
      const postId = post.getId()
      const likes = await this.postDataBase.getLikesPost(postId)
      post.setLikes(likes)
  }
  return posts
}

  public deletePost = async (post: IDeletePostDTO) => {
    const { token, postId } = post;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const findPost: any = await this.postDataBase.findPostById(postId);

    if (!findPost.length) {
      throw new PostNotFound();
    }

    if (
      payload.role === USER_ROLES.NORMAL &&
      findPost[0].user_id !== payload.id
    ) {
      throw new PermissionDenied();
    }

    return await this.postDataBase.deletePost(postId);
  };

  public addLike = async (post: IAddLikeDTO) => {
    const { token, postId } = post;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const findPost = await this.postDataBase.findPostById(postId);

    if (!findPost) {
      throw new PostNotFound();
    }

    const isAlreadyLiked = await this.postDataBase.findLike(postId, payload.id);

    if (isAlreadyLiked) {
      throw new PostAlreadyLiked();
    }

    const postLiked: ILikeDB = {
      id: this.idGenerator.generate(),
      post_id: postId,
      user_id: payload.id,
    };

    return await this.postDataBase.addLike(postLiked);
  };

  public removeLike = async (post: IRemoveLikeDTO) => {
    const { token, postId } = post;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new AuthorizationError();
    }

    const findPost = await this.postDataBase.findPostById(postId);

    if (!findPost) {
      throw new PostNotFound();
    }

    const isAlreadyLiked = await this.postDataBase.findLike(postId, payload.id);

    if (!isAlreadyLiked) {
      throw new PostDidntLiked();
    }

    return await this.postDataBase.removeLike(postId, payload.id);
  };
}
