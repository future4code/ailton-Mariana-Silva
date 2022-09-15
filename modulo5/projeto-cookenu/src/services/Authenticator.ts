import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { typeUser } from "../model/User";

dotenv.config();

interface UserSystem {
  user_id: string;
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
        expiresIn: "24hr",
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
