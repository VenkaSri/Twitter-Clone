import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from '@reduxjs/toolkit/query'

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api",
  }),
  endpoints: (builder) => ({
    checkEmailAvailable: builder.query({
      query: (email) => `auth/email_available?email=${email}`,
    }),
    registerUser: builder.mutation({
      query: (form) => ({
        url: "/auth/register",
        method: "POST",
        body: form,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const { useCheckEmailAvailableQuery, useRegisterUserMutation } = authApi;
