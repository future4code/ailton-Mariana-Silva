import { UserDataBase } from "../data/userDataBase";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailExists } from "../error/EmailExists";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";
import { GenerateId } from "../services/IdGenarator";
import { Authenticator } from "../services/Authenticator";
import {
  FollowDTO,
  GetProfileByIdDTO,
  LoginDTO,
  User,
  userDTO,
} from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";
import { MissingFields } from "../error/MissingFields";
import { RecipeDataBase } from "../data/recipeDataBase";
import { NotFollowing } from "../error/NotFollowing";

export class UserBusiness {
  constructor(
    private userDataBase: UserDataBase,
    private recipeDataBase: RecipeDataBase,
    private generateId: GenerateId,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}
  signup = async (user: userDTO) => {
    const { user_name, user_email, user_password, role } = user;

    if (
      !user_name ||
      !user_email ||
      !user_email.includes("@") ||
      !user_password ||
      user_password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const emailAlreadyExist = await this.userDataBase.getUserByEmail(
      user_email
    );
    if (emailAlreadyExist) {
      throw new EmailExists();
    }

    const user_id: any = this.generateId.createId();

    const hashPassword: string = await this.hashManager.generateHash(
      user_password
    );

    const newUser = new User(
      user_id,
      user_name,
      user_email,
      hashPassword,
      role
    );

    const result = await this.userDataBase.createUser(newUser);

    return this.authenticator.generateToken(user_id);
  };

  login = async (user: LoginDTO) => {
    const { user_email, user_password } = user;

    if (
      !user_email ||
      !user_password ||
      !user_email.includes("@") ||
      user_password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const emailExist: any = await this.userDataBase.getUserByEmail(user_email);

    let correctPassword: boolean = false;
    if (!emailExist) {
      throw new EmailNoExists();
    }

    const hash = emailExist.getPassword();

    correctPassword = await this.hashManager.compareHash(user_password, hash);

    if (!correctPassword) {
      throw new IncorrectPassword();
    }

    return this.authenticator.generateToken(emailExist.getId());
  };

  getProfile = async (token: string) => {

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }
    
    return await this.userDataBase.getUserById(authenticationUser);
  };

  getProfileById = async (user: GetProfileByIdDTO): Promise<any> => {
    const { user_id, token } = user;

    if (!user_id) {
      throw new InvalidCredentials();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    return await this.userDataBase.getUserById(user_id);

  };

  postFollow = async (user: FollowDTO) => {
    const { follower_id, token } = user;

    if (!follower_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const userById = await this.userDataBase.getUserById(follower_id);

    if (!userById) {
      throw new InvalidCredentials();
    }

    return await this.userDataBase.postFollowUser(
      authenticationUser,
      follower_id
    );

  };

  deleteFollow = async (user: FollowDTO) => {
    const { follower_id, token } = user;

    if (!follower_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const userById = await this.userDataBase.getUserById(follower_id);

    if (!userById) {
      throw new EmailNoExists();
    }

    const userUnfollow = await this.userDataBase.deleteFollowUser(
      authenticationUser,
      follower_id
    );

    return userUnfollow;
  };

  getFeed = async (token: string) => {
    
    const authenticationUser: any = this.authenticator.verifyToken(token);
    
    if (!authenticationUser) {
      throw new PermissionDenied();
    }
    const feed = await this.userDataBase.getFeedByFollower(authenticationUser);

    if (!feed) {
      throw new NotFollowing();
    }

    return feed;
  };

  deleteAccount = async (user: GetProfileByIdDTO) => {
    const { user_id, token } = user;

    if (!user_id) {
      throw new InvalidCredentials();
    }

    const authenticationUser: any = this.authenticator.verifyToken(token);
    if (authenticationUser.role === "NORMAL" || authenticationUser === false) {
      throw new PermissionDenied();
    }
    const userById = await this.userDataBase.getUserById(user_id);

    if (!userById) {
      throw new EmailNoExists();
    }

    await this.userDataBase.deleteFollowUser(user_id, user_id);
    await this.recipeDataBase.deleteRecipeByAuthor(user_id);
    await this.userDataBase.deleteUserById(user_id);

    return "Account deleted successfully";
  };
}
