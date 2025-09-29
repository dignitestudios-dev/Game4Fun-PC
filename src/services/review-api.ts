import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

const baseQuery = fetchBaseQuery({
  baseUrl: "https://api.game4funpcs.com",
  // baseUrl: "http://3.150.169.176/",
  prepareHeaders: (headers) => {
    if (Cookies.get("token")) {
      headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
    }
    return headers;
  },
});

const baseQueryWithReauth: typeof baseQuery = async (
  args,
  api,
  extraOptions
) => {
  const result = await baseQuery(args, api, extraOptions);
  if (result.error && result.error.status === 401) {
    Cookies.remove("token");
    window.location.href = "/sign-in";
  }

  return result;
};

export const reviewApi = createApi({
  reducerPath: "reviewApi",
  baseQuery: baseQuery,
  endpoints: (builder) => ({
    getAllReviews: builder.query({
      query: () => `/review/getAllReviews`,
    }),


    postReview: builder.mutation<
      {message:string},
       FormData
    >({
      query: (body) => ({
        url: "/review/AddReview",
        method: "POST",
        body,
      }),
    }),

  }),
});

export const {
usePostReviewMutation,
useGetAllReviewsQuery
} = reviewApi;
