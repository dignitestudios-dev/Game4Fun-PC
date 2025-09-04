 interface CartItem {
  productId: string;
  quantity: number;
  price: number;
}

 interface Cart {
  _id: string;
  userId: string;
  items: CartItem[];
  status: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 interface CartResponse {
  success: boolean;
  message: string;
  cart: Cart;
}
