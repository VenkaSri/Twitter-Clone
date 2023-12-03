import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_AUTH_BASE_URL,
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
    doesUserExist: builder.query({
      query: (emailUsernameOrPhone) =>
        `/user_availability?emailUsernameOrPhone=${emailUsernameOrPhone}`,
    }),
    logout: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "POST",
        credentials: "include",
      }),
      invalidatesTags: ["PrivateData"],
    }),
    login: builder.mutation({
      query: (form) => ({
        url: "/login",
        method: "POST",
        body: form,
        credentials: "include",
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
  }),
});

export const {
  useCheckEmailAvailableQuery,
  useRegisterUserMutation,
  useCheckAuthStatusQuery,
  useDoesUserExistQuery,
  useLogoutMutation,
  useLoginMutation,
} = authApi;
