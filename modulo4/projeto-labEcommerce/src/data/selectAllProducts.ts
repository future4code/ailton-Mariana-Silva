import { connection } from "./dataBase";

export const selectAllProducts = async (order: string, search:string): Promise<any> => {
  const productOrdered = await connection("labecommerce_products")
    .select("*")
    .orderBy("name", `${order}`)
    .where("name", "like", `%${search}%`)
    .orWhere("price", "like", `%${search}%`)
    

  return productOrdered;
};
