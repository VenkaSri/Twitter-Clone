import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/auth",
  }),
  endpoints: (builder) => ({
    checkEmailAvailable: builder.query({
      query: (email) => `/email_available?email=${email}`,
    }),
    registerUser: builder.mutation({
      query: (form) => ({
        url: "/register",
        method: "POST",
        body: form,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    checkAuthStatus: builder.query({
      query: () => ({
        url: "/auth_status",
        credentials: "include",
      }),
    }),
  }),
});

export const {
  useCheckEmailAvailableQuery,
  useRegisterUserMutation,
  useCheckAuthStatusQuery,
} = authApi;
