import { connection } from "./dataBase";

export default async function postUser(
  user_name:string, nickname:string, email:string
) {
  const result = await connection
    .insert({ user_name, nickname, email })
    .into("UsersList");
  
  return result[0]
}