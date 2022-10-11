import { UserDataBase } from "../dataBase/UserDataBase";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { EmailExists } from "../error/EmailExists";
import { EmailNoExists } from "../error/EmailExists";
import { InvalidCredentials } from "../error/InvalidCredentials";
import {
  ILoginInputDTO,
  ISignupInputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { IncorrectPassword } from "../error/IncorrectPassword";

export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  signup = async (input: ISignupInputDTO) => {
    const { name, email, password } = input;

    if (
      !name ||
      !email ||
      !email.includes("@") ||
      !password ||
      password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const emailAlreadyExist = await this.userDataBase.findByEmail(email);

    if (emailAlreadyExist) {
      throw new EmailExists();
    }

    const id = this.idGenerator.generate();
    const hashPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashPassword, USER_ROLES.NORMAL);

    await this.userDataBase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "User created successfully",
      token,
    };

    return response;
  };

  login = async (input: ILoginInputDTO) => {
    const { email, password } = input;

    if (!email || !password || !email.includes("@") || password.length < 6) {
      throw new InvalidCredentials();
    }

    const userDB = await this.userDataBase.findByEmail(email);

    if (!userDB) {
      throw new EmailNoExists();
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    const isPasswordCorrect = await this.hashManager.compare(
      password,
      user.getPassword()
    );

    if (!isPasswordCorrect) {
      throw new IncorrectPassword();
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "User logged successfully",
      token,
    };

    return response;
  };
}
