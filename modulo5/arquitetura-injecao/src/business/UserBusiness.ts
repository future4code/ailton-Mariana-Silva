import { UserDatabase } from "../database/UserDatabase";
import {
  IDeleteUserInputDTO,
  IEditUserInputDTO,
  IGetUsersDBDTO,
  IGetUsersInputDTO,
  IGetUsersOutputDTO,
  IGetUsersUser,
  ILoginInputDTO,
  ISignupInputDTO,
  User,
  USER_ROLES,
} from "../models/User";
import { Authenticator, ITokenPayload } from "../services/Authenticator";
import { HashManager } from "../services/HashManager";
import { IdGenerator } from "../services/IdGenerator";

export class UserBusiness {
  constructor(
    private userDatabase: UserDatabase,
    private idGenerator: IdGenerator,
    private hashManager: HashManager,
    private authenticator: Authenticator
  ) {}

  public signup = async (input: ISignupInputDTO) => {
    const name = input.name;
    const email = input.email;
    const password = input.password;

    if (!name || !email || !password) {
      throw new Error("Um ou mais parâmetros faltando");
    }

    if (typeof name !== "string" || name.length < 3) {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (typeof email !== "string" || email.length < 3) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 3) {
      throw new Error("Parâmetro 'password' inválido");
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (userDB) {
      throw new Error("E-mail já cadastrado");
    }

    const id = this.idGenerator.generate();
    const hashedPassword = await this.hashManager.hash(password);

    const user = new User(id, name, email, hashedPassword, USER_ROLES.NORMAL);

    await this.userDatabase.createUser(user);

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Cadastro realizado com sucesso",
      token,
    };

    return response;
  };

  public login = async (input: ILoginInputDTO) => {
    const email = input.email;
    const password = input.password;

    if (!email || !password) {
      throw new Error("Um ou mais parâmetros faltando");
    }

    if (typeof email !== "string" || email.length < 3) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (typeof password !== "string" || password.length < 3) {
      throw new Error("Parâmetro 'password' inválido");
    }

    const userDB = await this.userDatabase.findByEmail(email);

    if (!userDB) {
      throw new Error("E-mail não cadastrado");
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
      throw new Error("Senha incorreta");
    }

    const payload: ITokenPayload = {
      id: user.getId(),
      role: user.getRole(),
    };

    const token = this.authenticator.generateToken(payload);

    const response = {
      message: "Login realizado com sucesso",
      token,
    };

    return response;
  };

  public getUsers = async (input: IGetUsersInputDTO) => {
    const token = input.token;
    const search = input.search || "";
    const order = input.order || "name";
    const sort = input.sort || "ASC";
    const limit = Number(input.limit) || 10;
    const page = Number(input.page) || 1;

    const offset = limit * (page - 1);

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    const getUsersInputDB: IGetUsersDBDTO = {
      search,
      order,
      sort,
      limit,
      offset,
    };

    const usersDB = await this.userDatabase.getUsers(getUsersInputDB);

    const users = usersDB.map((userDB) => {
      const user = new User(
        userDB.id,
        userDB.name,
        userDB.email,
        userDB.password,
        userDB.role
      );

      const userResponse: IGetUsersUser = {
        id: user.getId(),
        name: user.getName(),
        email: user.getEmail(),
      };

      return userResponse;
    });

    const response: IGetUsersOutputDTO = {
      users,
    };

    return response;
  };

  public deleteUser = async (input: IDeleteUserInputDTO) => {
    const token = input.token;
    const idToDelete = input.idToDelete;

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido ou faltando");
    }

    if (payload.role !== USER_ROLES.ADMIN) {
      throw new Error("Apenas admins podem deletar usuários");
    }

    if (payload.id === idToDelete) {
      throw new Error("Não é possível deletar a própria conta");
    }

    const userDB = await this.userDatabase.findById(idToDelete);

    if (!userDB) {
      throw new Error("Usuário a ser deletado não encontrado");
    }

    await this.userDatabase.deleteUser(idToDelete);

    const response = {
      message: "Usuário deletado com sucesso",
    };

    return response;
  };

  public editUser = async (input: IEditUserInputDTO) => {
    const { token, idToEdit, email, name, password } = input;

    if (!token) {
      throw new Error("Token faltando");
    }

    if (!email && !name && !password) {
      throw new Error("Parâmetros faltando");
    }

    const payload = this.authenticator.getTokenPayload(token);

    if (!payload) {
      throw new Error("Token inválido");
    }

    if (email && typeof email !== "string") {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (
      email &&
      !email.match(
        /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
      )
    ) {
      throw new Error("Parâmetro 'email' inválido");
    }

    if (name && typeof name !== "string") {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (name && name.length < 3) {
      throw new Error("Parâmetro 'name' inválido");
    }

    if (password && typeof password !== "string") {
      throw new Error("Parâmetro 'password' inválido");
    }

    if (password && password.length < 6) {
      throw new Error("Parâmetro 'password' inválido");
    }

    if (payload.role === USER_ROLES.NORMAL) {
      if (payload.id !== idToEdit) {
        throw new Error("Usuários normais só podem editar a própria conta");
      }
    }

    const userDB = await this.userDatabase.findById(idToEdit);

    if (!userDB) {
      throw new Error("Conta a ser editada não existe");
    }

    const user = new User(
      userDB.id,
      userDB.name,
      userDB.email,
      userDB.password,
      userDB.role
    );

    name && user.setName(name);
    email && user.setEmail(email);
    password && user.setPassword(password);

    await this.userDatabase.editUser(user);

    const response = {
      message: "Edição realizada com sucesso",
    };

    return response;
  };
}
