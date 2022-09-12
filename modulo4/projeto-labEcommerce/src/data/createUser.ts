import { connection } from "./dataBase";

export const createUser = async(
  name: string,
  email: string,
  password: string
): Promise<void> => {
    return await connection("labecommerce_users").insert({
    name,
    email,
    password,
  });
}
