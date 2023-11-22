import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from '@reduxjs/toolkit/query'

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_POST_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPostByID: builder.query({
      query: (id) => `${id}`,
    }),
    getAllPosts: builder.query({
      query: () => "", // This will fetch from the base URL
    }),
    likePost: builder.mutation({
      query: (id) => ({
        url: `/like/${id}`,
        method: "POST",
      }),
    }),
    unlikePost: builder.mutation({
      query: (id) => ({
        url: `/unlike/${id}`,
        method: "POST",
      }),
    }),
  }),
});

export const {
  useGetPostByIDQuery,
  useGetAllPostsQuery,
  useLikePostMutation,
  useUnlikePostMutation,
} = postApi;
