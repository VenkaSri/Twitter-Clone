import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/users",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPrincipleUser: builder.query({
      query: (id) => ({
        url: `${id}`,
      }),
    }),
    uploadProfilePicture: builder.mutation({
      query: (formData) => ({
        url: "/profile_picture",
        method: "POST",
        body: formData,
      }),
    }),
    checkIfUsernameIsAvailable: builder.query({
      query: (username) => ({
        url: `/username_available`,
        params: { username },
      }),
    }),
  }),
});

export const {
  useGetPrincipleUserQuery,
  useUploadProfilePictureMutation,
  useCheckIfUsernameIsAvailableQuery,
} = userApi;
