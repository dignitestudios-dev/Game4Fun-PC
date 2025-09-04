 interface ProductImage {
  _id: string;
  file: string;
  fileExtension: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

 interface CartItem {
  productId: string;
  quantity: number;
  price: number;
  productName: string;
  productPrice: number;
  productImages: ProductImage[];
}

 interface Cart {
  _id: string;
  userId: string;
  status: string;
  totalPrice: number;
  createdAt: string;
  updatedAt: string;
  items: CartItem[];
}

 interface GetCartResponse {
  success: boolean;
  message: string;
  cart: Cart;
}
