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
