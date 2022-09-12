import { connection } from "./dataBase";

export default async function putUserEditById(id:number, user_name:string, nickname:string) {
  const editUser = await connection('UsersList')
  .where('UsersList.id', id)
  .update({user_name, nickname});
  
  return await connection("UsersList").select("*").where({id});
}