import moment from "moment";
import { User } from "../model/User";
import { dataBase } from "./dataBase";

export class UserDataBase extends dataBase {
  createUser = async (user: User): Promise<string> => {
    await this.getConnection()
      .insert({
        user_id: user.getId(),
        user_name: user.getName(),
        user_email: user.getEmail(),
        user_password: user.getPassword(),
        role: user.getRole(),
      })
      .into("cookenu_users");

    return `User created successfully`;
  };

  getUserByEmail = async (user_email: string): Promise<User | undefined> => {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where({ user_email });

    if (!result.length) {
      return undefined;
    } else {
      const user: User = new User(
        result[0].user_id,
        result[0].user_name,
        result[0].user_email,
        result[0].user_password,
        result[0].role
      );
      return user;
    }
  };

  getUserValidLogin = async (user_email: string, user_password: string) => {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where({ user_email })
      .andWhere({ user_password });

    return result;
  };

  getUserById = async (user_id: string) => {
    const result = await this.getConnection()
      .select("*")
      .from("cookenu_users")
      .where({ user_id });

    if (!result.length) {
      return undefined;
    } else {
      const user = new User(
        result[0].user_id,
        result[0].user_name,
        result[0].user_email,
        result[0].user_password,
        result[0].role
      );
      return user;
    }
  };

  postFollowUser = async (
    follower_id: string,
    followed_id: string
  ): Promise<string> => {
    const result = await this.getConnection()
      .insert({
        followed_id: follower_id,
        follower_id: followed_id,
      })
      .into("cookenu_followers");

    return `User Followed successfully`;
  };

  deleteFollowUser = async (
    followed_id: string,
    follower_id: string
  ): Promise<string> => {
    const result = await this.getConnection()
      .delete("*")
      .where({
        followed_id: followed_id,
        follower_id: follower_id,
      })
      .from("cookenu_followers");

    return `Unfollow successfully`;
  };

  getFeedByFollower = async (user_id: string): Promise<any> => {
    const result = await this.getConnection()
      .select(
        "cookenu_recipes.recipe_id",
        "cookenu_recipes.recipe_title",
        "cookenu_recipes.recipe_description",
        "cookenu_recipes.creation_date",
        "cookenu_users.user_id",
        "cookenu_users.user_name"
      )
      .from("cookenu_recipes")
      .innerJoin("cookenu_users", "user_id", "author_id")
      .innerJoin("cookenu_followers", "follower_id", "user_id")
      .where({ followed_id: `${user_id}` });

    return result;
  };

  deleteUserById = async (user_id: string) => {
    await this.getConnection()
      .delete("*")
      .from("cookenu_users")
      .where({ user_id });

    return `User deleted successfully`;
  };
}
