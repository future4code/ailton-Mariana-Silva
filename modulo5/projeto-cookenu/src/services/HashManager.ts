import * as bcrypt from "bcryptjs";
import dotenv from "dotenv";

export class HashManager {
  public generateHash = async (password: string): Promise<string> => {
    const rounds: number = Number(process.env.BCRYPT_COST);
    const salt: string = await bcrypt.genSalt(rounds);
    const result: string = await bcrypt.hash(password, salt);

    return result;
  };

  public compareHash = async (
    password: string,
    hash: string
  ): Promise<boolean> => {
    const result: boolean = await bcrypt.compare(password, hash);

    return result;
  };
}
