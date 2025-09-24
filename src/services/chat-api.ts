import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const chatApi = createApi({
  reducerPath: "chatApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.game4funpcs.com", 
    // baseUrl: "http://localhost:8000", // 👈 uncomment this for local testing
    prepareHeaders: (headers) => {
      if (Cookies.get("token")) {
        headers.set("Authorization", `Bearer ${Cookies.get("token")}`);
      }
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  tagTypes: ["chat"],
  endpoints: (builder) => ({
    aiChatBot: builder.mutation<
      { reply: string }, 
      { message: string }  
    >({
      query: (body) => ({
        url: "/product/aiChatBot",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAiChatBotMutation } = chatApi;
