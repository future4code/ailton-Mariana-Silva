import { connection } from "./dataBase";

export default async function getUserById(id: number):Promise<any> {
  const result = await connection
    .select("id", "nickname")
    .from("UsersList")
    .where("UsersList.id", id);

  return result[0];
}
