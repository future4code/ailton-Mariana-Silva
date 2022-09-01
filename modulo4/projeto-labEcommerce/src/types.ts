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
  imgUrl: string;
};

export type Purchase = {
  id: number;
  userId: string;
  productId: string;
  productName: string;
  quantity: number;
  price: number;
  totalPrice: number;
};
