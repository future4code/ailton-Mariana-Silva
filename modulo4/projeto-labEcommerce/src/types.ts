export type User = {
  id: number;
  name: string;
  email: string;
  password: string;
  purchases: Purchase[];
};

export type Product = {
  id: number;
  name: string;
  price: number;
  image_url: string;
};

export type Purchase = {
  id: number;
  user_id: number;
  product_id: number;
  product_name: string;
  quantity: number;
  price: number;
  total_price: number;
};
