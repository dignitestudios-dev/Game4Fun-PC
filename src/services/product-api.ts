import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
  prepareHeaders: (headers) => {
    if (Cookies.get("token")) {
      headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (args, api, extraOptions) => {
  const result = await baseQuery(args, api, extraOptions);

  if (result.error && result.error.status === 401) {
    // clear token if you want
    Cookies.remove("token");
    // redirect to login
    window.location.href = "/sign-in";
  }

  return result;
};

export const productApi = createApi({
  reducerPath: "productApi",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Product", "Cart"],
  endpoints: (builder) => ({
    getAllProducts: builder.query<ProductsResponse, { limit: string }>({
      query: ({ limit }) => `/product/getAllProducts?limit=${limit}`,
      providesTags: ["Product"],
    }),

    getSingleProduct: builder.query<SingleProductResponse, string>({
      query: (id) => `/product/getSingleProduct?productId=${id}`,
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),

    filterProducts: builder.query<ProductsResponse, Record<string, any>>({ //eslint-disable-line
      query: (params) => ({
        url: `/product/filterProducts`,
        method: "GET",
        params,
      }),
      providesTags: ["Product"],
    }),

    getFilters: builder.query<CpuGraphicResponse, void>({
      query: () => "/product/getFilters",
    }),

    addToCart: builder.mutation<CartResponse, { productId: string; quantity: number; action: string }>({
      query: (body) => ({
        url: "/product/addToCart",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),

    aiSuggestion: builder.mutation<
      SystemBenchmark,
      {
        Processor: string;
        GraphicCard: string;
        RAM: string;
        ScreenResolution: string;
        FavoriteGames: string[];
      }
    >({
      query: (body) => ({
        url: "/product/aiSuggestionForm",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Cart"],
    }),

    removeFromCart: builder.mutation<RemoveCartResponse, { cartId: string; productId: string }>({
      query: ({ cartId, productId }) => ({
        url: `/product/removeFromCart?cartId=${cartId}&productId=${productId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Cart"],
    }),

    getCart: builder.query<GetCartResponse, void>({
      query: () => "/product/getCart",
      providesTags: ["Cart"],
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
  useFilterProductsQuery,
  useGetFiltersQuery,
  useAiSuggestionMutation,
  useAddToCartMutation,
  useRemoveFromCartMutation,
  useGetCartQuery,
} = productApi;
