import { ILikeDB, Post } from "../models/Post";
import { DataBase } from "./DataBase";

export class PostDataBase extends DataBase {
  public static TABLE_POSTS = "Labook_Posts";
  public static TABLE_LIKES = "Labook_Likes";

  createPost = async (post: Post) => {
    await this.getConnection()
      .insert({
        id: post.getId(),
        content: post.getContent(),
        user_id: post.getUserId(),
      })
      .into(PostDataBase.TABLE_POSTS);

    return `Post created successfully`;
  };

  public getPosts = async () => {
    const result = await this.getConnection()
      .select("*")
      .from(PostDataBase.TABLE_POSTS);

    return result;
  };

  public findPostById = async (postId: string) => {
    const result = await this.getConnection()
      .select("*")
      .from(PostDataBase.TABLE_POSTS)
      .where({ id: postId });

    return result;
  };

  public getLikesPost = async (postId: string) => {
    const result = await this.getConnection()
      .select("*")
      .count()
      .from(PostDataBase.TABLE_LIKES)
      .where({ post_id: postId });

    return result[0]['count(*)'] as number;
  };

  deletePost = async (postId: string) => {
    const result = await this.getConnection()
      .delete("*")
      .from(PostDataBase.TABLE_POSTS)
      .where({ id: postId });

    return `Post deleted successfully`;
  };

  public findLike = async (postId: string, userId: string) => {
    const result = await this.getConnection()
      .select("*")
      .from(PostDataBase.TABLE_LIKES)
      .where({ post_id: postId })
      .andWhere({ user_id: userId });

    return result[0];
  };

  public addLike = async (postLiked: ILikeDB) => {
    const result = await this.getConnection()
      .insert({
        id: postLiked.id,
        post_id: postLiked.post_id,
        user_id: postLiked.user_id,
      })
      .from(PostDataBase.TABLE_LIKES);

    return `Post liked successfully`;
  };

  public removeLike = async (postId: string, userId: string) => {
    const result = await this.getConnection()
      .delete("*")
      .where({ post_id: postId })
      .andWhere({ user_id: userId })
      .from(PostDataBase.TABLE_LIKES);

    return `Like removed successfully`;
  };
}
