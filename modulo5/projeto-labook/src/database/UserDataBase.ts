import { User } from "../models/User";
import { DataBase } from "./DataBase";

export class UserDataBase extends DataBase {
  public static TABLE_USERS = "Labook_Users";

  createUser = async (user: User) => {
    await this.getConnection()
      .insert({
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
        password: user.getPassword(),
        role: user.getRole(),
      })
      .into(UserDataBase.TABLE_USERS);

    return `User created successfully`;
  };

  public findByEmail = async (email: string) => {
    const result = await this.getConnection()
      .select("*")
      .from(UserDataBase.TABLE_USERS)
      .where({ email });

    if (!result.length) {
      return undefined;
    } else {
      const user: User = new User(
        result[0].id,
        result[0].name,
        result[0].email,
        result[0].password,
        result[0].role
      );
      return user;
    }
  };
}
