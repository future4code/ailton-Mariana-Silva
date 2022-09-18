import { User } from "../model/User";
import { database } from "./dataBase";

export class UserDataBase extends database {
  public async createUser(user: User) {
    await this.getConnection()
      .insert({
        id: user.getId(),
        email: user.getEmail(),
        password: user.getPassword(),
      })
      .into("User");
  }

  public async edit(id: string, nickname: string) {
    await this.getConnection().into("User").where({ id });
  }

  public async getUserByEmail(email: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email: email });

    return result;
  }

  public async getUserLogin(email: string, password: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ email: email })
      .andWhere({ password: password });

    return result;
  }

  public async getUserById(id: string) {
    const result = await this.getConnection()
      .select("*")
      .from("User")
      .where({ id });

    return result[0];
  }
}
