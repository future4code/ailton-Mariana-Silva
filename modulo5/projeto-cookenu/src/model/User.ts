export class User {
  constructor(
    private user_id: string,
    private user_name: string,
    private user_email: string,
    private user_password: string
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
}
