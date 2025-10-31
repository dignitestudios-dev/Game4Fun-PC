import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface CpuType {
  id: string;
  name: string;
  manufacturer?: string;
  model?: string;
}

export interface GpuType {
  id: string;
  name: string;
  manufacturer?: string;
  model?: string;
}

export interface GameType {
  id: string;
  name: string;
}

const baseQuery = fetchBaseQuery({
  baseUrl: "/api/proxy", // ✅ this will point to your Next.js server
  prepareHeaders: (headers) => {
    headers.set("Accept", "application/json");
    return headers;
  },
});

export const customProductApi = createApi({
  reducerPath: "customProductApi",
  baseQuery,
  endpoints: (builder) => ({
    getGames: builder.query<GameType[], void>({
      query: () => "games",
      transformResponse: (response: any) => {
        if (!Array.isArray(response)) return [];
        return response.map((item: any) => ({
          id: item._id || item.id || item.queryName,
          name: item.name || item.model || item.title || "Unknown Game",
        }));
      },
    }),

    getGpu: builder.query<GpuType[], void>({
      query: () => "gpus",
      transformResponse: (response: any) => {
        if (!Array.isArray(response)) return [];
        return response.map((item: any) => ({
          id: item._id || item.id || item.queryName,
          name: `${item.manufacturer || ""} ${item.model || item.name}`,
          manufacturer: item.manufacturer,
          model: item.model,
        }));
      },
    }),

    getCpu: builder.query<CpuType[], void>({
      query: () => "cpus",
      transformResponse: (response: any) => {
        if (!Array.isArray(response)) return [];
        return response.map((item: any) => ({
          id: item._id || item.id || item.queryName,
          name: `${item.manufacturer || ""} ${item.model || item.name}`,
          manufacturer: item.manufacturer,
          model: item.model,
        }));
      },
    }),
  }),
});

export const { useGetGamesQuery, useGetGpuQuery, useGetCpuQuery } =
  customProductApi;
