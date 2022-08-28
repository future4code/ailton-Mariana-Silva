import { connection } from "./dataBase";

export default async function getUserByName(search:string):Promise<any> {
  const result = await connection.raw(`SELECT id, nickname FROM Users WHERE nickname LIKE 
  '%${search}%' OR email LIKE '%${search}%' `) 

  return result[0];
}