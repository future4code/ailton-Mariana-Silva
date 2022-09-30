import { DataBase } from "../../src/dataBase/DataBase";
import { IUserDB, User, USER_ROLES } from "../../src/models/User";

export class UserDataBaseMock extends DataBase {
  public static TABLE_USERS = "Lama_Users";

  findByEmail = async (email: string) => {
    switch (email) {
      case "mari@gmail.com":
        const adminUser: IUserDB = {
          id: "101",
          name: "Mari Andrade",
          email: "mari@gmail.com",
          password:
            "hash-bananinha",
          role: USER_ROLES.ADMIN,
        };
        return adminUser;

      case "usermock@gmail.com":
        const normalUser: IUserDB = {
          id: "id-mock",
          name: "User Mock",
          email: "usermock@gmail.com",
          password: "hash-mock",
          role: USER_ROLES.NORMAL,
        };

        return normalUser;

      default:
        return undefined;
    }
  };

  createUser = async (user: User) => {};
}
