import { UserAddress } from "../types";
import { connection } from "./dataBase";

export async function creatUser(newAddress: UserAddress) {
  return await connection("AddressTable").insert({ newAddress });
}
