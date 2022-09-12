import { connection } from "./dataBase";

export const createProduct = async(
  name: string,
  price: number,
  image_url: string
): Promise<any> => {
    return await connection("labecommerce_products").insert({
    name,
    price,
    image_url,
  });
}
