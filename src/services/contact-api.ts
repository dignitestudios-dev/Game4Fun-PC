import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.api.game4funpcs.com",
    // baseUrl: "http://3.150.169.176/",
    prepareHeaders: (headers) => {
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      return headers;
    },
  }),
  endpoints: (builder) => ({
    submitMessage: builder.mutation<
      any, //eslint-disable-line
      { fullName: string; email: string; message: string }
    >({
      query: (body) => ({
        url: "contact/submitContactForm",
        method: "POST",
        body,
      }),
      //   invalidatesTags: ["Product"],
    }),
    getContactInfo: builder.query({
      query: () => ({
        url: "/payment/getContactInfo",
        method: "GET",
      }),
    }),
    postContactInfo: builder.mutation<
      any, //eslint-disable-line
      {
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
        url: "/payment/AddContactInfo",
        method: "POST",
        body,
      }),
      //   invalidatesTags: ["Product"],
    }),
    postQuote: builder.mutation<
      { success: boolean; message: string }, 
      {
        fullName: string;
        emailAddress: string;
        minBudgetRange: string;
        maxBudgetRange: string;
        preferredCPUBrand: string;
        preferredGPUBrand: string;
        ram: string;
        storage: string;
        additionalFeature: string;
      }
    >({
      query: (body) => ({
        url: "/contact/submitQuotation",
        method: "POST",
        body,
      }),
      //   invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useSubmitMessageMutation,
  useGetContactInfoQuery,
  usePostContactInfoMutation,
  usePostQuoteMutation
} = contactApi;
