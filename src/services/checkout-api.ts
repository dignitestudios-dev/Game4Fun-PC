import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const checkoutApi = createApi({
  reducerPath: "checkoutApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
    // baseUrl: "http://3.150.169.176/",
    prepareHeaders: (headers) => {
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    checkout: builder.mutation<
      CheckoutResponse,
      {
        paymentMethodId: string;
        cartId: string;
        firstName: string;
        lastName: string;
        address: string;
        appartment?: string;
        country: string;
        city: string;
        zipCode: string;
      }
    >({
      query: (body) => ({
        url: "/payment/checkOut",
        method: "POST",
        body,
      }),
      //   invalidatesTags: ["Product"],

      //   invalidatesTags: ["Product"],
    }),
  }),
});

export const { useCheckoutMutation } = checkoutApi;
