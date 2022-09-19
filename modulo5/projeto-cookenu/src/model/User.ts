export enum typeUser {
  ADMIN = "ADMIN",
  NORMAL = "NORMAL",
}
export class User {
  constructor(
    private user_id: string,
    private user_name: string,
    private user_email: string,
    private user_password: string,
    private role: typeUser
  ) {}

  public getId() {
    return this.user_id;
  }
  public getName() {
    return this.user_name;
  }

  public getEmail() {
    return this.user_email;
  }

  public getPassword() {
    return this.user_password;
  }
  public getRole() {
    return this.role;
  }
}

export interface UserBD {
  user_id: string,
  user_name: string,
  user_email: string
}

export interface feedDB {
  recipe_id:string,
  recipe_title: string,
  recipe_description:string,
  creation_date:string,
  user_id: string,
  user_name: string
}

export interface userDTO {
  user_name:string,
  user_email:string,
  user_password:string,
  role:typeUser
}
