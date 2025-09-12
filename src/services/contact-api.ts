import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const contactApi = createApi({
  reducerPath: "contactApi",
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
    submitMessage: builder.mutation<any, { fullName: string; email: string; message: string }>({  //eslint-disable-line
      query: (body) => ({
        url: "contact/submitContactForm",
        method: "POST",
        body,
      }),
    //   invalidatesTags: ["Product"],
    }),
  }),
});

export const {
useSubmitMessageMutation
} = contactApi;
