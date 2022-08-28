import { connection } from "./dataBase";

export default async function getTaskByCreator(creator:number):Promise<any> {

  const result = await connection("Task")
  .select("*")
  .where("creator_user_id", creator)
  
  return result[0]
}