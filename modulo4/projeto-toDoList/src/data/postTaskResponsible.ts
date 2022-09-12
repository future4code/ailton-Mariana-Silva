import { connection } from "./dataBase";

export default async function postTaskResponsible(
  task_id: number,
  responsible_user_id: number
){
  const result = await connection
    .insert({ task_id, responsible_user_id })
    .into("UserTaskRelation");

  return await connection("UserTaskRelation").select("*")
}
