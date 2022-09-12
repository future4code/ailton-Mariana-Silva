import { connection } from "./dataBase";

export default async function getAllUser():Promise<any> {
  const result = await connection("Users").select("*")

  return result;
}