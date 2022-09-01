import { connection } from "./dataBase";

export const createPurchase = async (
  user_id: number,
  product_id: number,
  quantity: number
): Promise<any> => {
  const priceArray = await connection("labecommerce_products")
    .select("price")
    .where("id", `${product_id}`);
  const price = priceArray[0].price;

  const total_price = quantity * price;

  const purchase = await connection("labecommerce_purchases").insert({
    user_id,
    product_id,
    quantity,
    total_price,
  });
};
