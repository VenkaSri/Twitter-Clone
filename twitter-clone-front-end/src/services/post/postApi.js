import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from '@reduxjs/toolkit/query'

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:8080/api/v1/posts",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getPostByID: builder.query({
      query: (id) => `${id}`,
    }),
    getAllPosts: builder.query({
      query: () => "", // This will fetch from the base URL
    }),
  }),
});

export const { useGetPostByIDQuery, useGetAllPostsQuery } = postApi;
