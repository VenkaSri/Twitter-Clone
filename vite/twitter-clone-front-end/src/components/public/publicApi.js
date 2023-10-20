import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/users",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    suggestUsers: builder.query({
      query: (page = 0, pageSize = 5) => ({
        url: `/suggestions`,
        params: { page, pageSize },
      }),
    }),
  }),
});

export const { useSuggestUsersQuery } = publicApi;
