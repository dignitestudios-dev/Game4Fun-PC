import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";
export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
    prepareHeaders: (headers) => {
      // headers.set("Content-Type", "application/json");
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      return headers;
    },
  }),
  tagTypes: ["getProfile"],
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/auth/signUp",
        method: "POST",
        body: {
          role: "user",
          email: userData.email,
          password: userData.password,
        },
      }),
    }),

    verifyOtp: builder.mutation({
      query: (otpData) => ({
        url: "/auth/verifyOtp",
        method: "POST",
        body: otpData,
      }),
    }),

    resendOtp: builder.mutation({
      query: (data) => ({
        url: "/auth/resendOtp",
        method: "POST",
        body: data,
      }),
    }),
    completeProfile: builder.mutation({
      query: (profileData) => ({
        url: "/auth/completeProfile",
        method: "POST",
        body: profileData,
      }),
      invalidatesTags: ["getProfile"],
    }),

    forgetPassword: builder.mutation({
      query: (emailData) => ({
        url: "/auth/forgetPassword",
        method: "POST",
        body: emailData,
      }),
    }),

    resetPassword: builder.mutation({
      query: (passwordData) => ({
        url: "/auth/resetPassword",
        method: "PATCH",
        body: passwordData,
      }),
    }),

    signIn: builder.mutation({
      query: (credentials) => ({
        url: "/auth/signIn",
        method: "POST",
        body: { role: "user", ...credentials },
      }),
      invalidatesTags: ["getProfile"],
    }),

    getProfile: builder.query({
      query: () => "/auth/getProfile",
      providesTags: ["getProfile"],
    }),

    updateProfile: builder.mutation({
      query: (profileData) => ({
        url: "/auth/updateProfile",
        method: "PUT",
        body: profileData,
      }),
    }),
  }),
});

export const {
  useSignUpMutation,
  useVerifyOtpMutation,
  useResendOtpMutation,
  useCompleteProfileMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useSignInMutation,
  useGetProfileQuery,
  useUpdateProfileMutation,
} = authApi;
