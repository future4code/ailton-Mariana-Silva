import { UserDataBase } from "../database/UserDataBase";
import { EmailAlreadyExists, EmailNoExists } from "../errors/EmailExists";
import { IncorrectPassword } from "../errors/IncorrectPassWord";
import { InvalidCredentials } from "../errors/InvalidCredentials";
import { ILoginDTO, ISignupDTO, User, USER_ROLES } from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (user: ISignupDTO) => {
    const { name, email, password } = user;

    if (
      !name ||
      name.length < 3 ||
      !email ||
      !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
      !password ||
      password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const emailAlreadyExists = await this.userDataBase.findByEmail(email);

    if (emailAlreadyExists) {
      throw new EmailAlreadyExists();
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const newUser = new User(
      id,
      name,
      email,
      hashedPassword,
      USER_ROLES.NORMAL
    );

    
    const payload: ITokenPayload = {
      id: newUser.getId(),
      role: newUser.getRole(),
    };
    
    this.authenticator.generateToken(payload);

    return this.userDataBase.createUser(newUser);
  };

  public login = async (user: ILoginDTO) => {
    const { email, password } = user;

    if (
      !email ||
      !email.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g) ||
      !password ||
      password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const emailExist: any = await this.userDataBase.findByEmail(email);

    let correctPassword: boolean = false;
    if (!emailExist) {
      throw new EmailNoExists();
    }

    const newUser = new User(
      emailExist.id,
      emailExist.name,
      emailExist.email,
      emailExist.password,
      emailExist.role
    );

    correctPassword = await this.hashManager.compare(
      password,
      newUser.getPassword()
    );

    if (!correctPassword) {
      throw new IncorrectPassword();
    }

    const payload: ITokenPayload = {
      id: newUser.getId(),
      role: newUser.getRole(),
    };

    return this.authenticator.generateToken(payload);
  };
}
