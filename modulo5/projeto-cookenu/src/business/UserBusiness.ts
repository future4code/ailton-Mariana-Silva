import { UserDataBase } from "../data/userDataBase";
import { InvalidCredentials } from "../error/InvalidCredentials";
import { EmailExists } from "../error/EmailExists";
import { HashManager } from "../services/HashManager";
import { IncorrectPassword } from "../error/IncorrectPassword";
import { PermissionDenied } from "../error/PermissionDenied";
import { GenerateId } from "../services/IdGenarator";
import { Authenticator } from "../services/Authenticator";
import { User, UserBD, userDTO } from "../model/User";
import { EmailNoExists } from "../error/EmailNoExists";
import { MissingFields } from "../error/MissingFields";
import { RecipeDataBase } from "../data/recipeDataBase";
import { NotFollowing } from "../error/NotFollowing";

export class UserBusiness {
  signup = async (userDTO: userDTO) => {
    const { user_name, user_email, user_password, role } = userDTO;

    if (
      !user_name ||
      !user_email ||
      !user_email.includes("@") ||
      !user_password ||
      user_password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const userDataBase = new UserDataBase();

    const emailAlreadyExist = await userDataBase.getUserByEmail(user_email);
    if (emailAlreadyExist) {
      throw new EmailExists();
    }

    const user_id: any = new GenerateId().createId();

    const hashPassword: string = await new HashManager().generateHash(
      user_password
    );

    const newUser = new User(
      user_id,
      user_name,
      user_email,
      hashPassword,
      role
    );

    const result = await userDataBase.createUser(newUser);

    const token = new Authenticator().generateToken(user_id);

    return token;
  };

  login = async (user_email: string, user_password: string) => {
    if (
      !user_email ||
      !user_password ||
      !user_email.includes("@") ||
      user_password.length < 6
    ) {
      throw new InvalidCredentials();
    }

    const userData = new UserDataBase();

    const emailExist: any = await userData.getUserByEmail(user_email);

    let correctPassword: boolean = false;
    if (!emailExist) {
      throw new EmailNoExists();
    }

    const hash = emailExist.getPassword();

    correctPassword = await new HashManager().compareHash(user_password, hash);

    if (!correctPassword) {
      throw new IncorrectPassword();
    }

    const token = new Authenticator().generateToken(emailExist.getId());

    return token;
  };

  getProfile = async (token: string) => {
    const authenticationUser: any = new Authenticator().verifyToken(token);

    const newUserData = new UserDataBase();

    const userById = await newUserData.getUserById(token);

    return userById;
  };

  getById = async (user_id: string, token: string): Promise<any> => {
    if (!user_id) {
      throw new InvalidCredentials();
    }

    const authenticationUser: any = new Authenticator().verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const newUserData = new UserDataBase();

    const userById = await newUserData.getUserById(user_id);

    return userById;
  };

  postFollow = async (follower_id: string, token: string) => {
    if (!follower_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = new Authenticator().verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const newUserData = new UserDataBase();

    const userById = await newUserData.getUserById(follower_id);

    if (!userById) {
      throw new InvalidCredentials();
    }

    const userFollow = await newUserData.postFollowUser(
      authenticationUser,
      follower_id
    );

    return userFollow;
  };

  deleteFollow = async (follower_id: string, token: string) => {
    if (!follower_id) {
      throw new MissingFields();
    }

    const authenticationUser: any = new Authenticator().verifyToken(token);

    if (!authenticationUser) {
      throw new PermissionDenied();
    }

    const newUserData = new UserDataBase();

    const userById = await newUserData.getUserById(follower_id);

    if (!userById) {
      throw new EmailNoExists();
    }

    const userUnfollow = await newUserData.deleteFollowUser(
      authenticationUser,
      follower_id
    );

    return userUnfollow;
  };

  getFeedByFollower = async (tokenUser: any) => {

    const { token } = tokenUser;

    if (!token) {
      throw new InvalidCredentials();
    }
    const id: any = new Authenticator().verifyToken(token)

    const newRecipeData = new UserDataBase();

    const feed = await newRecipeData.getRecipeByFollower(id);

    if (!feed) {
      throw new NotFollowing();
    }

    return feed;
  };

    deleteAccount = async (user_id:string, token: string) => {

        if (!user_id) {
          throw new InvalidCredentials();
        }

        const authenticationUser: any = new Authenticator().verifyToken(token);

        if (
          authenticationUser.role === "normal" ||
          authenticationUser === false
        ) {
          throw new PermissionDenied();
        }

        const newUserData: any = new UserDataBase();
        const userById = await newUserData.getUserById(user_id);

        if (!userById) {
          throw new EmailNoExists();
        }
        const newRecipe: any = new RecipeDataBase();
        const result = await newUserData.deleteUserById();
        const resultFollows = await newUserData.deleteFollowUser();
        const resultRecipe = await newRecipe.delRecipe();

        return { result, resultFollows, resultRecipe }

    };

  }

