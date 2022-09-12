import { connection } from "./dataBase";

export default async function putUserEditById(id:number, name:string, nickname:string) {
  const editUser = await connection('Users')
  .where('Users.id', id)
  .update({name, nickname});
  
  return await connection("Users").select("*").where({id});
}