import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/users",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getUserByID: builder.query({
      query: (id) => `${id}`,
    }),
  }),
});

export const { useGetUserByIDQuery } = userApi;
