import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://1b75nbwh-8000.inc1.devtunnels.ms",
    prepareHeaders: (headers) => {
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({
    signUp: builder.mutation({
      query: (userData) => ({
        url: "/auth/signUp",
        method: "POST",
        body: userData,
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
      query: (emailData) => ({
        url: "/auth/resendOtp",
        method: "POST",
        body: emailData,
      }),
    }),

    completeProfile: builder.mutation({
      query: (profileData) => ({
        url: "/auth/completeProfile",
        method: "POST",
        body: profileData,
      }),
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
    }),

    getProfile: builder.query({
      query: () => "/auth/getProfile",
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
