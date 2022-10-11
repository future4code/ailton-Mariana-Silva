import { IUserDB, User } from "../models/User";
import { DataBase } from "./DataBase";

export class UserDataBase extends DataBase {
  public static TABLE_USERS = "Lama_Users";

  findByEmail = async (email: string): Promise<IUserDB | undefined> => {
    const userDB: IUserDB[] = await DataBase.connection(
      UserDataBase.TABLE_USERS
    )
      .select()
      .where({ email });

    return userDB[0];
  };

  createUser = async (user: User) => {
    const userDB: IUserDB = {
      id: user.getId(),
      name: user.getName(),
      email: user.getEmail(),
      password: user.getPassword(),
      role: user.getRole(),
    };

    await DataBase.connection(UserDataBase.TABLE_USERS).insert(userDB);
  };
}
