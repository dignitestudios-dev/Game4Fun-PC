import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const faqApi = createApi({
  reducerPath: "faqApi",
  baseQuery:  fetchBaseQuery({
    baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
    prepareHeaders: (headers) => {
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      return headers;
    },
  }), 
  endpoints: (builder) => ({
    // addProduct: builder.mutation<any, { name: string; price: number; [key: string]: any }>({
    //   query: (body) => ({
    //     url: "/products",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),

    getFaq: builder.query<GetFaqsResponse, void>({
      query: () => `/setting/getAllFaqs`,
    }),
  }),
});

export const {
useGetFaqQuery
} = faqApi;
