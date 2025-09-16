 interface CheckoutResponse {
  success: boolean;
  message: string;
  data: {
    paymentIntentId: string;
    clientSecret: string;
  };
}
