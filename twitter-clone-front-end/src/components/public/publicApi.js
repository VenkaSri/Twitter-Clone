import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const publicApi = createApi({
  reducerPath: "publicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_USER_BASE_URL,
    credentials: "include",
  }),
  endpoints: (builder) => ({
    // https://stackoverflow.com/a/74844699

    suggestUsers: builder.query({
      query: (page) => `suggestions?page=${page}&pageSize=3`,
      serializeQueryArgs: ({ endpointName }) => {
        return endpointName;
      },
      merge: (currentCache, newItems) => {
        currentCache.data.content.push(...newItems.data.content);
      },
      forceRefetch({ currentArg, previousArg }) {
        return currentArg !== previousArg;
      },
    }),
  }),
});

export const { useSuggestUsersQuery } = publicApi;
