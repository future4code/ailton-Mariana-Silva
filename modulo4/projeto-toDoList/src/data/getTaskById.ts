import { connection } from "./dataBase";

export default async function getTaskById(id: number):Promise<any> {
  const result = await connection.raw(`SELECT TasksList.id, title, task_description, limit_date, task_status, creator, nickname FROM TasksList JOIN UsersList ON TasksList.creator = UsersList.id WHERE TasksList.id = ${id}`)

  return result[0];
}
