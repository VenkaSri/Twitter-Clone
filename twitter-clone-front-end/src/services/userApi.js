import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const userApi = createApi({
  reducerPath: "userApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_USER_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPrincipleUser: builder.query({
      query: () => ({}),
    }),
    getUserByID: builder.query({
      query: (id) => `${id}`,
    }),
    uploadProfilePicture: builder.mutation({
      query: (formData) => ({
        url: "/profile_picture",
        method: "POST",
        body: formData,
      }),
    }),
    getAllPostsByUsername: builder.query({
      query: (username) => `/${username}/posts`,
    }),
    checkIfUsernameIsAvailable: builder.query({
      query: (username) => ({
        url: `/username_available`,
        params: { username },
      }),
    }),
    updateUsername: builder.mutation({
      query: (username) => ({
        url: "/update_username",
        method: "POST",
        body: username,
        headers: {
          "Content-type": "application/json",
        },
      }),
    }),
    followUser: builder.mutation({
      query: (idToFollow) => ({
        url: `/follow/${idToFollow}`,
        method: "POST",
      }),
    }),
    unfollowUser: builder.mutation({
      query: (idToUnfollow) => ({
        url: `/unfollow/${idToUnfollow}`,
        method: "POST",
      }),
    }),
    getLikes: builder.query({
      query: () => `/posts/likes`,
    }),
    getUserByUsername: builder.query({
      query: (username) => ({
        url: "/username",
        params: { username },
      }),
    }),
  }),
});

export const {
  useGetPrincipleUserQuery,
  useUploadProfilePictureMutation,
  useCheckIfUsernameIsAvailableQuery,
  useUpdateUsernameMutation,
  useGetUserByIDQuery,
  useFollowUserMutation,
  useUnfollowUserMutation,
  useGetLikesQuery,
  useGetUserByUsernameQuery,
  useGetAllPostsByUsernameQuery,
} = userApi;
