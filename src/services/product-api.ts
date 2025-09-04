import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery:  fetchBaseQuery({
    baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "application/json");
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      return headers;
    },
  }), 
  tagTypes: ["Product", "Cart"],
  endpoints: (builder) => ({
    // addProduct: builder.mutation<any, { name: string; price: number; [key: string]: any }>({
    //   query: (body) => ({
    //     url: "/products",
    //     method: "POST",
    //     body,
    //   }),
    //   invalidatesTags: ["Product"],
    // }),

    getAllProducts: builder.query<ProductsResponse, { limit:string }>({
      query: ({limit}) => `/product/getAllProducts?limit=${limit}`,
      providesTags: ["Product"],
    }),

    getSingleProduct: builder.query<SingleProductResponse, string>({
      query: (id) => `/product/getSingleProduct?productId=${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    filterProducts: builder.query<ProductsResponse, Record<string, string | number>>({
      query: (params) => ({
        url: "/products/filter",
        params,
      }),
      providesTags: ["Product"],
    }),

    getFilters: builder.query<CpuGraphicResponse, void>({
      query: () => "/products/filters",
    }),
    addToCart: builder.mutation<CartResponse, { productId: string; quantity: number }>({
      query: (body) => ({
        url: "/cart/add",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation<RemoveCartResponse, string>({
      query: (id) => ({
        url: `/cart/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    getCart: builder.query<GetCartResponse, void>({
      query: () => "/cart",
      providesTags: ["Cart"],
    }),
  }),
});

export const {
//   useAddProductMutation,
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useFilterProductsQuery,
  useGetFiltersQuery,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
} = productApi;
