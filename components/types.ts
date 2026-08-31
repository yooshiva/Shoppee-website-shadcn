export type Product = {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  category: string;
  discount?: number;
  rating?: number;
  sold?: number;
  location?: string;
};

export type CartItem = Product & {
  quantity: number;
};