import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { Console } from "console";

dotenv.config();

export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
interface UserSystem {
  id: string;
  role: typeUser;
}

export class Authenticator {
  generateToken(userInfo: UserSystem) {
    const token = jwt.sign(
      {
        userInfo,
      },
      process.env.JWT_KEY as string,
      {
        expiresIn: "1hr",
      }
    );

    return token;
  }

  verifyToken(token: string) {
    let verify;
    try {
      verify = jwt.verify(token, process.env.JWT_KEY as string) as any;

      const returnType: UserSystem = verify.userInfo;

      return returnType;
    } catch {
      verify = false;
      return verify;
    }
  }
}
