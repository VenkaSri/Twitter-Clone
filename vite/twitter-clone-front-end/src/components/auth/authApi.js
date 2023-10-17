import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from '@reduxjs/toolkit/query'

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    checkEmailAvailable: builder.query({
      query: (email) => `auth/email_available?email=${email}`,
    }),
  }),
});

export const { useCheckEmailAvailableQuery } = authApi;
