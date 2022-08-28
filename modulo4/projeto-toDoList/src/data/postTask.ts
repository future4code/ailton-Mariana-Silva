import { connection } from "./dataBase";

export default async function postTask(
  title:string, task_description:string, limit_date:string, creator:number
):Promise<number> {

  const result = await connection
    .insert({title, task_description, limit_date, creator })
    .into("TasksList");
  
  return result[0]
}