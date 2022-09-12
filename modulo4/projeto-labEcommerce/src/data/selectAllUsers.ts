import { connection } from "./dataBase";

export const selectAllUsers = async ():Promise<any> => {
  const allUsers = await connection("labecommerce_users").select("*")

  return allUsers;
}