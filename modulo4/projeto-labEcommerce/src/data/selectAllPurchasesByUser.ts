import { connection } from "./dataBase";

export const selectAllPurchasesByUser = async (
  user_id: number
): Promise<any> => {
  const PurchasesByUser = await connection("labecommerce_purchases")
    .select(
      "labecommerce_users.name as user_name",
      "labecommerce_products.name as product_name",
      "labecommerce_purchases.quantity",
      "labecommerce_purchases.total_price"
    )
    .join(
      "labecommerce_users",
      "labecommerce_users.id",
      "=",
      "labecommerce_purchases.user_id"
    )
    .join(
      "labecommerce_products",
      "labecommerce_products.id",
      "=",
      "labecommerce_purchases.product_id"
    )
    .where("user_id", `${user_id}`)

  return PurchasesByUser;
};
